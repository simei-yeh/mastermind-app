import React, { useState } from 'react';
import styles from './currentGuess.module.css'
import Button from '../buttons/buttons'
import Input from '../inputs/inputs'
import Header from '../header/header'

const CurrentGuess = ({ newGame, round, pattern, start, nextRound, submitGuess, endGame }) => {
  const [newGuesses, setNewGuesses] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    // need to validate guess as numbe && within range
    let newValue = parseInt(value);

    setNewGuesses(value);
    console.log(newGuesses)

  }

  const handleSubmit = (e) => {
    if (newGuesses.length === pattern.length) {
      submitGuess([newGuesses, checkGuessesCorrect(newGuesses)]);
    } else {
      let missing = [];
      pattern.split('').forEach((num, i) => (newGuesses[i] === undefined) ? missing.push(i + 1) : null)
      alert(`Enter remaining numbers at location(s) ${missing}`)
    }
  }

  const checkGuessesCorrect = (guesses) => {
    let answers = []
    for (let i = 0; i < guesses.length; i++) {
      if (guesses[i] === pattern[i]) { answers.push('correct'); }
      else if (pattern.includes(guesses[i])) { answers.push('partiallyCorrect'); }
      else { answers.push('incorrect'); }
    }
    return answers;
  }

  const continueGame = (e) => {
    setNewGuesses({});
    nextRound();
  }

  return (
    <div className={styles['currentGuess']}>
      <Header message={`Current Guesses`} header={`sub-header`} />
      <div>
        {newGame
          ? <span className={styles['roundsNote']}>
            {round === 0 ? `End of Game` : `Rounds Remaining: ${round}`}
          </span>
          : null}
      </div>
      <div className={styles['inputContainer']}>
        <div>
          <Input
            show={newGame}
            callback={handleInputChange} />
        </div>
        {pattern.split('').map((num, i) =>
          <div
            className={styles['numbersDisplay']}
            key={i}
            name={i}
            num={num}
          >
            {newGuesses[i] | ''}
          </div>)}
      </div>
      {/* buttons to start and end game */}
      <div>
        <Button id={`end`} show={newGame} callback={endGame} text={`End Game`} />
        <Button id={`start`} show={!newGame} callback={start} text={`Start New Game`} />
      </div>
    </div>
  )
}

export default CurrentGuess;