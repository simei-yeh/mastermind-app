import React, { useState } from 'react';
import styles from './mainContainer.module.css'
import Button from '../buttons/buttons'
import Header from '../header/header'
import GameContainer from '../gameContainer/gameContainer'
import Brain from '../../brain.png'

const MainContainer = ({ }) => {
  const [enter, setEnter] = useState(false);

  return (
    <div className={styles['mainContainer']}>
      {enter
        ? <>
          <Header message={`Mastermind`} header={`main-header`} >
          </Header>
          <GameContainer />
        </>
        :
        <>
          <img src={Brain} className={styles['mainImage']} />
          <Header message={`Welcome! Let's play Mastermind`} header={`entry-header`} />
          <Button
            text={`Click here to play!`}
            show={true}
            callback={() => { setEnter(true) }}
          />
          </>
      }
      </div>
  )
}

export default MainContainer;