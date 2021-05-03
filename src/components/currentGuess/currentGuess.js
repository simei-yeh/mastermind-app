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
    if (value.slice(-1) === '8' || value.slice(-1) === '9') {
      return;
    } else {
      setNewGuesses(value);
    }
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
    let remIndex = {};
    let guessesRem = [];

    for (let i = guesses.length - 1; i >= 0; i--) {
      if (guesses[i] === pattern[i]) {
        answers.push('correct');
      } else {
        remIndex[pattern[i]] = ++remIndex[pattern[i]] || 1;
        guessesRem.push(guesses[i]);
      }
    }

    guessesRem.forEach((g, i) => {
      if (remIndex[g]) {
        remIndex[g] = --remIndex[g] || 0;
        answers.push('pCorrect');
      } else {
        answers.push('incorrect');
      }
    })

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
              ${newGuesses.length >= i + 1 ? styles['filled'] : '' }
              ${newGuesses.length === i  && numberInput.current === document.activeElement ? styles['focused'] : ''}`}
              key={i}
              name={i}
              num={num}
            >
              <span>
                {`${newGuesses[i] === undefined ? '' : newGuesses[i]}`}
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