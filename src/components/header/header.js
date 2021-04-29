import React from 'react';
import styles from './header.module.css'
import Pinky from '../media/images/pinky.png'
import Brain from '../media/images/brain.png'
import Button from '../buttons/buttons'

const Header = ({ status, children, message, header }) => {
  return (
    <div className={`${styles['header']} ${styles[header]}`}>
      {header === 'main-header'
        ? <span className={styles['image-container']}><img src={Brain} alt="" /></span>
        : null}
      <span>{`${message}`}</span>
      {header === 'main-header'
        ? <span className={styles['image-container']}><img src={Pinky} alt="" /></span>
        : null}
        {children}
    </div>
  )
}

export default Header;