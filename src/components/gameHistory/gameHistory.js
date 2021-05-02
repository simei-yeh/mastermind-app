import React from 'react';
import styles from './gameHistory.module.css'
import Header from '../header/header'

const GameHistory = ({ past, pattern }) => {
  const guess = Math.floor(Math.random() * 4);

  return (
    <div className={styles['gameHistory']}>
      <Header message={`Past Guesses`} header={`sub-header`} />
      <div>
        <div className={`${styles['roundContainer']} ${styles['legend']}`}>
          <span className={`${styles['correct']} ${styles['legend-items']}`}>{`Correct `}</span>
          <span className={`${styles['partiallyCorrect']} ${styles['legend-items']}`} > {`Correct number`}</span>
          <span className={`${styles['incorrect']} ${styles['legend-items']}`} > {`Incorrect`}</span>
        </div>
        {past.map((round, i) =>
          <div key={i} className={styles['roundContainer']}>
            {round[0].split('').map((r, i) =>
              <span key={i} className={`${styles['guessContainer']}`} >
                <span key={i} className={styles['guess']}>{r}</span>
              </span>
            )}
            <span key={guess} className={`${styles['guessContainer']} ${styles[round[1][round[2]]]}`} >
              <span key={guess} className={styles['guess']}></span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}



export default GameHistory;