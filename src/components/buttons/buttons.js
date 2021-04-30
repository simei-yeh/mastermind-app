import React from 'react';
import styles from './buttons.module.css'

 const Button = ({ text, id, show, callback }) => {
  return (
    <>
    {show
      ? <div className={`${styles['buttons']}
      ${styles[id]}`}
          onClick={callback} >
         {text}
        </div>
      : null
    }
    </>
  )
}

export default Button;