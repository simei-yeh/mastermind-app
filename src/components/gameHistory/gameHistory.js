import React from 'react';
import styles from './gameHistory.module.css'

const GameHistory = ({ past, show, callback }) => {
  return (
    <div className={styles['gameHistory']}>
      <div className={styles['header']}>Past Guesses</div>
      <div>
        {past.map((round, i) =>
          <div key={i} className={styles['roundContainer']}>
          {round.map((r, i) =>
            <span className={styles['guessContainer']}>
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