import React from 'react';
import styles from './header.modules.css'

 const Header = ({ text, status }) => {
  return (
    <div className={styles['header']}>
      {text}
    </div>
  )
}

export default Header;