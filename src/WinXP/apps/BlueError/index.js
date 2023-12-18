import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import errorSoundSrc from 'assets/sounds/screen-death.mp3';

function Error({ onClose, onClickButton }) {

  const [audioPlayed, setAudioPlayed] = useState(false);


  useEffect(() => {
    const playErrorSound = async () => {
      try {
        const audio = new Audio(errorSoundSrc);

        audio.addEventListener('ended', () => {
          setAudioPlayed(true);

          // Restante do código que você quer executar após a reprodução do áudio
          console.log('Som reproduzido com sucesso');
        });

        await audio.play();
      } catch (e) {
        console.log(e);
      }
    };

    playErrorSound();
  }, []);

  if (!audioPlayed) {
    // Retorna null enquanto o áudio ainda está sendo reproduzido
    return null;
  }
  
  return (
    <BlueErrorDiv tabIndex={0} onKeyDown={onClickButton} onClick={onClose}>
      <Container className="d-flex justify-content-center align-items-center vh-100 white">
        <div>
          <div className='text-center'>
            <Title className='d-inline'>Windows</Title>
          </div>
        <p>
        A problem has been detect and Windows has been shut down to prevent damage<br/>
        to your computer.<br/>
        If this is the first time you' ve seen this Stop error screen,<br/>
        restart your computer. If this screen appears again, follow these steps:<br/>
        Disable or uninstall any anti-virus, disk defragmentation<br/>
        or backup utilities. Check your hard drive configuration,<br/>
        and check for any updated drivers. Run CHKDSK /F to check<br/>
        for hard drive corruption, and then restart your computer.<br/><br/>
        Technical information:<br/><br/>
        *** WHATSAPP: +55 (31) 994831043<br/>
        *** EMAIL: dev.felipesnunes@gmail.com<br/>
        </p>      
        </div>
  </Container>
      </BlueErrorDiv>

  );
}
const Title = styled.div`
  font-size: 25px;
  color:blue;
  background-color:#aaaaaa;
  padding-right: 6px;
  padding-left: 6px;
`;


const Container = styled.div`
  font-size: 20px;
  color:#aaaaaa;
  font-family: Tahoma, 'Noto Sans', sans-serif;

`;

const BlueErrorDiv = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  
`;

export default Error;
