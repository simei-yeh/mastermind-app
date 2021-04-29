import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import Button from '../buttons/buttons';
import Win from '../media/images/congrats_both.png'
import Lose from '../media/images/try_again_brain.png'
import LoseJingle from '../media/sounds/brain_AYPWIP.mp3'
import WinJingle from '../media/sounds/brain_yes.mp3'

const Modal= ({ show, onClose, submission }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const newModal = show ? (
    <div className={styles['modal']}>
      <div className={styles['modal-container']}>
        <div className={styles['modal-header']}>
          <span className={styles['modal-title']}>
            {`Create an ad for an investment fund`}
          </span>
          <Button
            show={true}
            callback={handleCloseClick}
            text="Close"
            id="close"
          />
        </div>
        <div className={styles['modal-body']}>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      Modal,
      document.getElementById('modal-overlay')
    );
  } else {
    return null;
  }
};

export default Modal;