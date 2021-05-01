import React, { useState, useEffect } from 'react';
import styles from './gameContainer.module.css';
import GameHistory from '../gameHistory/gameHistory';
import CurrentGuess from '../currentGuess/currentGuess';
import randomNumberAPI from '../API/randomNumberAPI'
import Modal from '../modal/modal'

const GameContainer = () => {
  const [startGame, setStartGame] = useState(true);
  const [pattern, setPattern] = useState('    ');
  const [pastGuesses, setPastGuesses] = useState([]);
  const [round, setRound] = useState(null);
  const [win, setWin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    var answers;
    if (startGame) {
      (async function () {
        let API = new randomNumberAPI();
        answers = await API.findNewNumbers();
        setPattern(answers);
      })();
      setRound(10);
      setPastGuesses([]);
      setWin(false);
    }
  }, [startGame])

  useEffect(() => {
    if (round === 0) {
      console.log('last round')
      setStartGame(false);
      setRound(null);
      setShowModal(true);
    }
  }, [round])

  return (
    <div className={styles['gameContainer']}>
      <CurrentGuess
        newGame={startGame}
        round={round}
        pattern={pattern}
        start={() => { setStartGame(true) }}
        nextRound={() => { setRound(round - 1) }}
        submitGuess={(str) => { setPastGuesses([...pastGuesses, str]) }}
        endGame={() => { setRound(0) }}
        checkWin={() => { setWin(true) }}
      />
      <GameHistory
        past={pastGuesses}
        pattern={pattern}
      />

      {showModal ? <Modal show={showModal} onClose={() => setShowModal(false)} win={win} /> : null}
    </div>
  )
}

export default GameContainer;