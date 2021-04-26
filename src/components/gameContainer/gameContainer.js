import React from 'react';
import styles from './gameContainer.module.css';
import GameHistory from '../gameHistory/gameHistory';
import CurrentGuess from '../currentGuess/currentGuess';

 const GameContainer = ({ children }) => {
  return (
    <div className={styles['gameContainer']}>
      <GameHistory />
      <CurrentGuess />
    </div>
  )
}

export default GameContainer;