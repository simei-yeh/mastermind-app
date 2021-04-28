import React from 'react';
import styles from './header.module.css'

const Header = ({ status, children, message, header }) => {
  return (
    <div className={`${styles['header']} ${styles[header]}`}>
      {message}
    </div>
  )
}

export default Header;