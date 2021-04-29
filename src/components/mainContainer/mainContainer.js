import React, { useState, useRef, useEffect } from 'react';
import styles from './mainContainer.module.css'
import Button from '../buttons/buttons'
import Header from '../header/header'
import GameContainer from '../gameContainer/gameContainer'
import Brain from '../media/images/brain.png'
import PatBIntro from '../media/sounds/patbIntro.MP3'

const MainContainer = ({ }) => {
  const [enter, setEnter] = useState(true);
  const musicRef = useRef()

  useEffect(() => {
    if (enter) {
      musicRef.current.play();
    }
  }, [enter])

  return (
    <div className={styles['mainContainer']}>
      {enter
        ? <>
          <Header message={`Mastermind`} header={`main-header`} >
          </Header>
          <GameContainer />
          <audio controls ref={musicRef}>
              <source src={PatBIntro} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </>
        :
        <>
          <img src={Brain} className={styles['mainImage']} alt="" />
          <Header message={`Welcome! Let's play Mastermind`} header={`entry-header`}
            callback={() => { setEnter(true) }}>
            <div>
              <Button
                text={`Click here to play!`}
                show={true}
                callback={() => setEnter(true)}
              />
            </div>
          </Header>
        </>
      }
        </div>
  )
}

export default MainContainer;