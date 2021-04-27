import React, { useState, useEffect, useRef } from 'react';
import styles from './currentGuess.module.css'
import Button from '../buttons/buttons'
import Input from '../inputs/inputs'

const CurrentGuess = ({ newGame, round, pattern, start, nextRound, submitGuess, endGame }) => {
  const [newGuesses, setNewGuesses] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // need to validate guess as numbe && within range
    setNewGuesses({ ...newGuesses, [name]: value });
    console.log(newGuesses)
  }

  const handleSubmit = (e) => {
    let submission = Object.values(newGuesses);
    if (submission.length === pattern.length) {
      submitGuess(submission);
      setNewGuesses({});
    } else {
      let missing = [];
      pattern.forEach((num, i) => (newGuesses[i] === undefined) ? missing.push(i+1) : null)
      alert(`Enter remaining numbers at location(s) ${missing}`)
    }
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
        {pattern.map((num, i) =>
          <Input
            key={i}
            name={i}
            num={num}
            show={newGame}
            value={newGuesses[i] | ''}
            callback={handleInputChange}
          />)}
      </div>
      {/* buttons to submit answers, continue game play after reviewing answer results, end game */}
      <div>
        <Button id={`confirm`} show={newGame} callback={handleSubmit} text={`Submit to check answers`} />
        <Button id={`continue`} show={newGame} callback={nextRound} text={`Continue`} />
        <Button id={`end`} show={newGame} callback={endGame} text={`End Game`} />
      </div>
    </div>
  )
}

export default CurrentGuess;