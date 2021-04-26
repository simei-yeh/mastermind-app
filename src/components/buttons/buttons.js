import React from 'react';
import styles from './buttons.module.css'

 const Button = ({ text, show, callback }) => {
  return (
    <div className={styles['buttons']}>
      {text}
    </div>
  )
}

export default Button;