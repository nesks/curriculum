import React, { useEffect, useRef } from 'react';
import Webamp from 'webamp';
import { initialTracks } from './config';

function Winamp({ onClose, onMinimize }) {
  const ref = useRef(null);
  const webamp = useRef(null);

  // Armazena as funções onClose e onMinimize em refs
  const onCloseRef = useRef(onClose);
  const onMinimizeRef = useRef(onMinimize);

  // Atualiza as refs sempre que as funções mudarem
  useEffect(() => {
    onCloseRef.current = onClose;
    onMinimizeRef.current = onMinimize;
  }, [onClose, onMinimize]);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }
    webamp.current = new Webamp({
      initialTracks,
    });
    webamp.current.renderWhenReady(target).then(() => {
      target.appendChild(document.querySelector('#webamp'));
    });

    return () => {
      webamp.current.dispose();
      webamp.current = null;
    };
  }, []);
  useEffect(() => {
    if (webamp.current) {
      // Registra os eventos usando as refs
      webamp.current.onClose(() => onCloseRef.current());
      webamp.current.onMinimize(() => onMinimizeRef.current());
    }
  }, []); // Executa apenas uma vez

  return (
    <div
      style={{ position: 'fixed', left: 0, top: 0, right: 0, bottom: 0 }}
      ref={ref}
    />
  );
}

export default Winamp;