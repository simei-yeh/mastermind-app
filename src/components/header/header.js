import React from 'react';
import styles from './header.module.css'

 const Header = ({ text, status }) => {
  return (
    <div className={styles['header']}>
      <span className={styles['header-content']}>{`Welcome! Let's play Mastermind`}</span>
    </div>
  )
}

export default Header;