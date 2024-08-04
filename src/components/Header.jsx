
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <Link className={styles.logo} to="/">
            INDOTRAVI
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`${styles.sections} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link to="/tour" onClick={toggleMenu}>Tour</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
        <div className={styles.loginButton}>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
