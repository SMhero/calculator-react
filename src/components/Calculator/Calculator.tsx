import React, { useState } from 'react';

import Button from '../Button/Button';
import Screen from './Screen/Screen';

import styles from './Calculator.module.css';

const Calculator = () => {
  const [value, setValue] = useState(null);

  return (
    <div className={styles.calc}>
      <Screen />
      <div className={styles.buttons}>
        <Button onClick={(event) => console.log(event.target)} value={7} />
        <Button onClick={(event) => console.log(event.target)} value={8} />
        <Button onClick={(event) => console.log(event.target)} value={9} />
        <Button onClick={(event) => console.log(event.target)} value={4} />
        <Button onClick={(event) => console.log(event.target)} value={5} />
        <Button onClick={(event) => console.log(event.target)} value={6} />
        <Button onClick={(event) => console.log(event.target)} value={1} />
        <Button onClick={(event) => console.log(event.target)} value={2} />
        <Button onClick={(event) => console.log(event.target)} value={3} />
      </div>
    </div>
  );
};

export default Calculator;