import React from 'react';
import styles from './gameHistory.module.css'

const GameHistory = ({ past, pattern }) => {
  return (
    <div className={styles['gameHistory']}>
      <div className={styles['header']}>Past Guesses</div>
      <div>
        {past.map((round, i) =>
          <div key={i} className={styles['roundContainer']}>
          {round[0].map((r, i) =>
            <span className={`${styles['guessContainer']} ${styles[round[1][i]]}`} >
            <span key={i} className={styles['guess']}>{r}</span>
            </span>
          )}
          </div>
        )}
      </div>
    </div>
  )
}

export default GameHistory;