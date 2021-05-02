import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import Button from '../buttons/buttons';
import WinImage from '../media/images/congrats_both.png'
import LoseImage from '../media/images/try_again_brain.png'
import LoseJingle from '../media/sounds/brain_AYPWIP.MP3'
import WinJingle from '../media/sounds/brain_yes.MP3'

const Modal = ({ show, onClose, win, audio }) => {
  const musicRef = useRef(null);

  useEffect(() => {
    if (show && audio) {
      musicRef.current.play();
    }
    if (win) {
      window.confetti({
        particleCount: 300,
        spread: 200
      });
    }
  }, [show])


  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const newModal = show ? (
    <div className={styles['modal']} onClick={handleCloseClick}>
      <div className={styles['modal-container']}>
        <Button
          show={true}
          callback={handleCloseClick}
          text="Close"
          id="close"
        />
        <div className={styles['modal-body']}>
          <img src={win ? WinImage : LoseImage} alt="modal" />
        </div>
        {audio
          ? <audio ref={musicRef}>
          <source src={win ? WinJingle : LoseJingle} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
          : null}
      </div>
    </div>
  ) : null;

  if (show) {
    return ReactDOM.createPortal(
      newModal,
      document.getElementById('modal-overlay')
    );
  } else {
    return null;
  }
};

export default Modal;