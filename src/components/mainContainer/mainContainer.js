import React, { useState } from 'react';
import styles from './mainContainer.module.css';
import Button from '../buttons/buttons';
import Header from '../header/header';
import GameContainer from '../gameContainer/gameContainer';
import Brain from '../media/images/brain.png';


const MainContainer = () => {
  const [enter, setEnter] = useState(false);
  const [audio, setAudio] = useState(true);

  return (
    <div className={`${styles['mainContainer']} ${styles[enter]}`}>
      {enter
        ? <>
          <Header message={`Mastermind`} header={`main-header`} >
          </Header>
          <GameContainer
            enter={enter}
            audio={audio}
            toggleAudio={() => setAudio(!audio)} />
        </>
        :
        <div className={styles['mainImage']}>
          <img src={Brain} alt="" />
          <Header message={`Let's play Mastermind`} header={`entry-header`}
            callback={() => { setEnter(true) }}>
          </Header>
          <Button
            text={`Click here to play!`}
            show={true}
            callback={() => setEnter(true)}
          />
          <Button
            show={true}
            callback={() => setAudio(!audio)}
            id={'audio'}
            text={audio ? 'Turn off audio' : 'Turn on audio'}
            audio={audio}
          />
        </div>
      }
    </div>
  )
}

export default MainContainer;