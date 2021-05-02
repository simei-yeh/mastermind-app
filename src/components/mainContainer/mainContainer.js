import React, { useState } from 'react';
import styles from './mainContainer.module.css';
import Button from '../buttons/buttons';
import Header from '../header/header';
import GameContainer from '../gameContainer/gameContainer';
import Brain from '../media/images/brain.png';


const MainContainer = () => {
  const [enter, setEnter] = useState(false);

  return (
    <div className={`${styles['mainContainer']} ${styles[enter]}`}>
      {enter
        ? <>
          <Header message={`Mastermind`} header={`main-header`} >
          </Header>
          <GameContainer enter={enter} />
        </>
        :
        <div className={styles['mainImage']}>
          <img src={Brain}  alt="" />
          <Header message={`Let's play Mastermind`} header={`entry-header`}
            callback={() => { setEnter(true) }}>
          </Header>
              <Button
                text={`Click here to play!`}
                show={true}
                callback={() => setEnter(true)}
              />
        </div>
      }
        </div>
  )
}

export default MainContainer;