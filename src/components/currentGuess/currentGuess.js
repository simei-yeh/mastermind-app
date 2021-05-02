import React, { useState, useEffect, useRef } from 'react';
import styles from './currentGuess.module.css'
import Button from '../buttons/buttons'
import Input from '../inputs/inputs'
import Header from '../header/header'

const CurrentGuess = ({ newGame, round, pattern, start, nextRound, submitGuess, endGame, checkWin }) => {
  const [newGuesses, setNewGuesses] = useState('');
  const numberInput = useRef(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNewGuesses(value);
  }

  useEffect(() => {
    if (newGuesses.length === pattern.length) {
      submitGuess([newGuesses, ...checkGuessesCorrect(newGuesses)]);
      setNewGuesses('');
      nextRound();
      if (newGuesses === pattern) {
        checkWin();
        endGame();
      }
    }
  }, [newGuesses])

  const checkGuessesCorrect = (guesses) => {
    let answers = [];

    for (let i = 0; i < guesses.length; i++) {
      if (guesses[i] === pattern[i]) { answers.push('correct'); }
      else if (pattern.includes(guesses[i])) { answers.push('pCorrect');}
      else { answers.push('incorrect');}
    }
    answers.sort((a,b) => {
      return a.length - b.length;
    })
    return [answers];
  }

  return (
    <div className={styles['currentGuess']}>
      <Header message={`Current Guesses`} header={`sub-header`} />
      <div>
        {newGame
          ? <span className={styles['roundsNote']}>
            {`Rounds Remaining: ${round}`}
          </span>
          : null}
      </div>
      {newGame
        ? <div className={styles['inputDisplayContainer']}>
          <div className={styles['inputContainer']}>
            <Input
              show={newGame}
              callback={handleInputChange}
              value={newGuesses}
              ref={numberInput} />
          </div>
          {pattern.split('').map((num, i) =>
            <div
              className={`${styles['numbersDisplay']}
              ${newGuesses.length >= i + 1 ? styles['filled'] : null }
              ${newGuesses.length === i  && numberInput.current === document.activeElement ? styles['focused'] : null}`}
              key={i}
              name={i}
              num={num}
            >
              <span>
                {newGuesses[i] | ''}
              </span>
            </div>)}
        </div>
        : null}
      {/* buttons to start and end game */}
      <div>
        <Button id={`end`} show={newGame} callback={() => {endGame(); setNewGuesses('');}} text={`End Game`} />
        <Button id={`start`} show={!newGame} callback={start} text={`Start New Game`} />
      </div>
    </div>
  )
}

export default CurrentGuess;