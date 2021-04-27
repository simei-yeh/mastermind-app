import React from 'react';
import styles from './buttons.module.css'

 const Button = ({ text, show, callback }) => {
  return (
    <>
    {show
      ? <div className={styles['buttons']} onClick={callback} >
         {text}
        </div>
      : null
    }
    </>
  )
}

export default Button;