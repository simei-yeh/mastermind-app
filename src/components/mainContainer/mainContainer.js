import React from 'react';
import styles from './mainContainer.module.css'
import Header from '../header/header'
import GameContainer from '../gameContainer/gameContainer'

 const MainContainer = ({ children }) => {
  return (
    <div className={styles['mainContainer']}>
      <Header />
      <GameContainer />
    </div>
  )
}

export default MainContainer;