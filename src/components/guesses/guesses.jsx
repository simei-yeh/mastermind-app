import React from 'react';
import styles from './guesses.module.css'

 const Guesses = ({ number, show, status }) => {
  return (
    <div className={styles['guesses']}>
      {number}
    </div>
  )
}

export default Guesses;