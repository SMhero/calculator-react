import React from 'react';
import styles from './Button.module.css';

interface Props {
  onClick: (event: React.BaseSyntheticEvent) => void;
  value: React.ReactText;
}

const Button = ({
  onClick,
  value
}: Props) => (
  <button className={styles.button} onClick={onClick}>
    {value}
  </button>
);

export default Button;