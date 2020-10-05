import React from 'react';

import Calculator from '../Calculator/Calculator';

import logo from './logo.svg';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <Calculator />
    </div>
  );
}

export default App;
