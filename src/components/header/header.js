import React from 'react';
import styles from './header.module.css'
import Pinky from '../../pinky.png'
import Brain from '../../brain.png'

const Header = ({ status, children, message, header }) => {
  return (
    <div className={`${styles['header']} ${styles[header]}`}>
      {header === 'main-header'
        ? <span className={styles['image-container']}><img src={Brain} /></span>
        : null}
      <span>{message}</span>
      {header === 'main-header'
        ? <span className={styles['image-container']}><img src={Pinky} /></span>
        : null}

    </div>
  )
}

export default Header;