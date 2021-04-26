import React from 'react';
import styles from './gameContainer.module.css'

 const GameContainer = ({ children }) => {
  return (
    <div className={styles['gameContainer']}>
      Hello World
    </div>
  )
}

export default GameContainer;