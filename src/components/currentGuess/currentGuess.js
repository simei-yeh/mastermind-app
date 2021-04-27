import React, { useState } from 'react';
import styles from './currentGuess.module.css'
import Button from '../buttons/buttons'

const CurrentGuess = ({ guess, show, callback, newGame, start, round, submitGuess, nextRound, endGame }) => {
  return (
    <div className={styles['currentGuess']}>
      <span>Current Guess</span>
      {/* button to start game and note to indicate number of remaining rounds */}
      <div>
        <Button text={`Click play to begin`} id={`start`} show={!newGame} callback={start} />
        {newGame ? <span>{`Rounds Remaining: ${round}`}</span> : null}
      </div>

      {/* buttons to submit answers, continue game play after reviewing answer results, end game */}
      <div>
        <Button text={`Submit to check answers`} id={`confirm`} show={newGame} callback={submitGuess} />
        <Button text={`Continue`} id={`continue`} show={newGame} callback={nextRound} />
        <Button text={`End Game`} id={`end`} show={newGame} callback={endGame} />
      </div>
    </div>
  )
}

export default CurrentGuess;