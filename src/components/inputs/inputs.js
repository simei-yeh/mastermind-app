import React from 'react';
import styles from './inputs.module.css'

const Input = ({ show, callback, value, name }) => {
  return (
    <>
      {show
        ? <input
            type="number"
            min="0"
            max="7"
            className={styles['inputs']}
            onChange={callback}
            name={name}
            value={value}
            >
        </input>
        : null
      }
    </>
  )
}

export default Input;