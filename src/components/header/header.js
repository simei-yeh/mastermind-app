import React from 'react';
import styles from './header.module.css'

 const Header = ({ text, status, children }) => {
  return (
    <div className={styles['header']}>
      <span className={styles['header-content']}>{`Welcome! Let's play Mastermind`}</span>
      {children}
    </div>
  )
}

export default Header;