import React from 'react';
import styles from './inputs.module.css'

const Input = ({ show, callback, value, name }) => {
  return (
    <span className={styles['guesses']}>
      {show
        ? <input
            type="number"
            className={styles['inputs']}
            onChange={callback}
            name={name}
            value={value}
            >
        </input>
        : null
      }
    </span>
  )
}

export default Input;