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
        });

        await audio.play();
      } catch (e) {
        // Se áudio falhar (ex: autoplay bloqueado), renderizar componente mesmo assim
        setAudioPlayed(true);
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
      
Falha ao informar o salário devido a negociações variáveis conforme a vaga ou projeto. <br/>
 Se esta tela aparecer novamente, siga estas etapas:<br/>
Envie um email com  a vaga do processo seletivo com as informações necessarias<br/>
ou entre em contato pelo Whatsapp!<br/>
Caso as outras opções não funcione, ligue para o telefone informado<br/>
que nosso suporte técnico responderá suas duvidas!<br/><br/>
      Informações técnicas:<br/><br/>
        *** EMAIL: dev.felipesnunes@gmail.com<br/>
        *** WHATSAPP: +55 (31) 994831043<br/>
        *** CELULAR: +55 (31) 994831043<br/>

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
