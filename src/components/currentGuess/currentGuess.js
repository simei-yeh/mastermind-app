import React, { useState, useEffect, useRef } from 'react';
import styles from './currentGuess.module.css'
import Button from '../buttons/buttons'
import Input from '../inputs/inputs'

const CurrentGuess = ({ newGame, round, pattern, start, nextRound
  , submitGuess, endGame }) => {
  const [unsubmittedGuesses, setUnsubmittedGuesses] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUnsubmittedGuesses({ ...unsubmittedGuesses, [name]: value });
    console.log(unsubmittedGuesses)
  }

  return (
    <div className={styles['currentGuess']}>
      <span>Current Guess</span>
      {/* button to start game and note to indicate number of remaining rounds */}
      <div>
        <Button id={`start`} show={!newGame} callback={start} text={`Click play to begin`} />
        {newGame ? <span>{round === 0 ? `End of Game` : `Rounds Remaining: ${round}`}</span> : null}
      </div>
      <div>
        {pattern.map((num, i) => <Input key={i} name={i} num={num} show={newGame} callback={handleInputChange} />)}
      </div>
      {/* buttons to submit answers, continue game play after reviewing answer results, end game */}
      <div>
        <Button id={`confirm`} show={newGame} callback={submitGuess} text={`Submit to check answers`} />
        <Button id={`continue`} show={newGame} callback={nextRound} text={`Continue`} />
        <Button id={`end`} show={newGame} callback={endGame} text={`End Game`} />
      </div>
    </div>
  )
}

export default CurrentGuess;