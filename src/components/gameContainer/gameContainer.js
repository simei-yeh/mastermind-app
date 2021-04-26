import React, { useState } from 'react';
import styles from './gameContainer.module.css';
import GameHistory from '../gameHistory/gameHistory';
import CurrentGuess from '../currentGuess/currentGuess';

 const GameContainer = ({ children }) => {
  const [startGame, setStartGame] = useState(false);

  return (
    <div className={styles['gameContainer']}>
      <GameHistory />
      <CurrentGuess />
    </div>
  )
}

export default GameContainer;