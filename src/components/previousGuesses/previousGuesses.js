import React from 'react';
import styles from 'buttons.modules.css'

 const Button = ({ guess, show, callback }) => {
  return (
    <div className={styles['prevGuesses']}>
      {guess}
    </div>
  )
}

export default Button;