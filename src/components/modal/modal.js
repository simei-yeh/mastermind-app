import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import Button from '../buttons/buttons';
import WinImage from '../media/images/congrats_both.png'
import LoseImage from '../media/images/try_again_brain.png'
import LoseJingle from '../media/sounds/brain_AYPWIP.MP3'
import WinJingle from '../media/sounds/brain_yes.MP3'

const Modal= ({ show, onClose, win  }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const musicRef = useRef(null);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (show) {
      musicRef.current.play();
    }
  }, [show])


  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const newModal = show ? (
    <div className={styles['modal']}>
      <div className={styles['modal-container']}>
        <div className={styles['modal-body']}>
          <Button
            show={true}
            callback={handleCloseClick}
            text="Close"
            id="close"
          />
            <img src={win ? WinImage : LoseImage} alt="modal" />
            <audio controls ref={musicRef}>
              <source src={win ? WinJingle : LoseJingle} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
          </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      newModal,
      document.getElementById('modal-overlay')
    );
  } else {
    return null;
  }
};

export default Modal;