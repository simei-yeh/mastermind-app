import React, { useState, useEffect } from 'react';
import styles from './gameContainer.module.css';
import GameHistory from '../gameHistory/gameHistory';
import CurrentGuess from '../currentGuess/currentGuess';

 const GameContainer = ({ children }) => {
  const [startGame, setStartGame] = useState(false);
  const [guess, setGuess] = useState([]);
  const [round, setRound] = useState(null);

  useEffect(() => {
    if (startGame) {
      setRound(10);
    }
  }, [startGame])

  useEffect(() => {
    if (round === 0) {
      setStartGame(false);
      setRound(null);
      alert('Game over! Restart Game');
    }
  }, [round])

  return (
    <div className={styles['gameContainer']}>
      <GameHistory />
      <CurrentGuess
        newGame={startGame}
        round={round}
        start={() => {setStartGame(true)}}
        nextRound={() => {setRound(round-1)}}
        submitGuess={() => {}}
        endGame={() => {setRound(0)}}
      />
    </div>
  )
}

export default GameContainer;