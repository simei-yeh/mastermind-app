import React, { useState, useEffect, useRef } from 'react';
import styles from './currentGuess.module.css'
import Button from '../buttons/buttons'
import Input from '../inputs/inputs'

const CurrentGuess = ({ newGame, round, pattern, start, nextRound, submitGuess, endGame }) => {
  const [newGuesses, setNewGuesses] = useState({});

  const handleInputChange = (e) => {
    const { name, value, onKeyDown  } = e.target;
    // need to validate guess as numbe && within range
    let newValue = parseInt(value);

    if (isNaN(newValue) || newValue > 7 || newValue < 0) {
      console.log(onKeyDown )
      alert('Enter valid number')

    } else {
      setNewGuesses({ ...newGuesses, [name]: `${newValue}` });
      console.log(newGuesses)
    }
  }

  const handleSubmit = (e) => {
    let submission = Object.values(newGuesses);
    if (submission.length === pattern.length) {
      submitGuess([submission, checkGuessesCorrect(submission)]);
    } else {
      let missing = [];
      pattern.forEach((num, i) => (newGuesses[i] === undefined) ? missing.push(i+1) : null)
      alert(`Enter remaining numbers at location(s) ${missing}`)
    }
  }

  const checkGuessesCorrect = (guesses) => {
    let answers = []
    for (let i = 0; i < guesses.length; i++) {
      console.log(guesses[i] === pattern[i])
      console.log(pattern.includes(guesses[i]) !== -1);;
      if (guesses[i] === pattern[i]) {answers.push('correct');}
      else if (pattern.includes(guesses[i])) {answers.push('partiallyCorrect');}
      else {answers.push('incorrect');}
    }
    return answers;
  }

  const continueGame = (e) => {
    setNewGuesses({});
    nextRound();
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
        <Button id={`continue`} show={newGame} callback={continueGame} text={`Continue`} />
        <Button id={`end`} show={newGame} callback={endGame} text={`End Game`} />
      </div>
    </div>
  )
}

export default CurrentGuess;