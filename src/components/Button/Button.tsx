import React from 'react';
import styles from './Button.module.css';

export type ButtonTypes =
  'decimal' | 'clear' | 'multiply' | 'add' | 'subtract' | 'calculate' | 'number';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonTypes | string;
  value: React.ReactText;
}

const Button = ({
  onClick,
  type = '',
  value
}: Props) => (
  <button className={styles.button} onClick={onClick} data-type={type}>
    {value}
  </button>
);

export default Button;