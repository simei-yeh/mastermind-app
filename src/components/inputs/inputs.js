import React from 'react';
import styles from './inputs.module.css'

const Input = React.forwardRef(({ show, callback, value, name }, ref) => {
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
            ref={ref}
            >
        </input>
        : null
      }
    </>
  )
})

export default Input;