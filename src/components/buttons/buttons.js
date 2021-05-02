import React from 'react';
import styles from './buttons.module.css'
import speakerOn from '../media/images/speaker_on.svg'
import speakerOff from '../media/images/speaker_off.svg'

const Button = ({ text, id, show, callback, audio }) => {
  return (
    <>
      {show
        ? <span className={`${styles['buttons']}
            ${styles[id]}`}
            onClick={callback} >
            {text}{id === 'audio' ? <img src={audio ? speakerOff : speakerOn} alt="audio" className={styles['speaker']} /> : null}
          </span>
        : null
      }
    </>
  )
}

export default Button;