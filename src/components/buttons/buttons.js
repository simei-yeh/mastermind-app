import React from 'react';
import styles from './buttons.module.css'

 const Button = ({ text, id, show, callback }) => {
  return (
    <>
    {show
      ? <span className={`${styles['buttons']}
      ${styles[id]}`}
          onClick={callback} >
         {text}
        </span>
      : null
    }
    </>
  )
}

export default Button;