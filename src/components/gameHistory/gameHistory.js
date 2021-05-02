import React from 'react';
import styles from './gameHistory.module.css'
import Header from '../header/header'

const GameHistory = ({ past, pattern }) => {
  return (
    <div className={styles['gameHistory']}>
      <Header message={`Past Guesses`} header={`sub-header`} />
      <div>
        <div className={`${styles['roundContainer']} ${styles['legend']}`}>
          <span className={`${styles['correct']} ${styles['legend-items']}`}>{`Correct `}</span>
          <span className={`${styles['pCorrect']} ${styles['legend-items']}`} > {`Correct number`}</span>
          <span className={`${styles['incorrect']} ${styles['legend-items']}`} > {`Incorrect`}</span>
        </div>
        {past.map((round, i) =>
          <div key={i} className={styles['roundContainer']}>
            {round[0].split('').map((r, i) =>
              <span key={i} className={`${styles['guessContainer']}`} >
                <span key={i} className={styles['guess']}>{r}</span>
              </span>
            )}
            <span key={i} className={`${styles['resultsContainer']}`} >
              {round[1].map((r, i) =>
                <span key={i} className={`${styles['guess']}  ${styles[r]}`}></span>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}



export default GameHistory;