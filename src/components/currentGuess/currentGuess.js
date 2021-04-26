import React, { useState } from 'react';
import styles from './currentGuess.module.css'
import Button from '../buttons/buttons'

 const CurrentGuess = ({ guess, show, callback }) => {
  const [startGame, setStartGame] = useState(false);

  return (
    <div className={styles['currentGuess']}>
      Current Guess
      <Button text={`Click play to begin`} id={`start`} />
      <Button text={`Continue`} id={`continue`} />
      <Button text={`Submit to check answers`} id={`confirm`} />
    </div>
  )
}

export default CurrentGuess;