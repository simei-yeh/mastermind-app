import React from 'react';
import styles from './gameHistory.module.css'

 const GameHistory = ({ guess, show, callback }) => {
  return (
    <div className={styles['gameHistory']}>
      <span>Past Guesses</span>
    </div>
  )
}

export default GameHistory;