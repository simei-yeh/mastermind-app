import React, { useState } from 'react';
import styles from './mainContainer.module.css'
import Button from '../buttons/buttons'
import Header from '../header/header'
import GameContainer from '../gameContainer/gameContainer'

const MainContainer = ({ }) => {
  const [enter, setEnter] = useState(true);

  return (
    <div className={styles['mainContainer']}>
      <Header message={`Welcome! Let's play Mastermind`} header={`main-header` } >
        {/* <Button
          text={`If you're ready to play, click here`}
          show={!enter}
          callback={() => { setEnter(true) }}
        /> */}
      </Header>
      {enter
        ? <GameContainer />
        : null
      }
    </div>
  )
}

export default MainContainer;