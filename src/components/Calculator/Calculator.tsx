import React, { useState } from 'react';
import { evaluate } from 'mathjs'

import Button from '../Button/Button';
import buttons from '../Button/buttons'

import styles from './Calculator.module.css';


const Calculator = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) : void => {
    // https://github.com/ant-design/ant-design/issues/6879#issuecomment-316005991
    setInputValue(inputValue + currentTarget.innerText);
  };

  const onCalculate = () => {
    setInputValue(evaluate(inputValue));
  };
  
  const onClearInputeValue = () => {
    setInputValue('');
  };

  const onDeleteLastSymbol = () => {
    setInputValue(inputValue.slice(0, inputValue.length - 1));
  };

  return (
    <div className={styles.calc}>
      <div className={styles.screen}>
        <input
          className={styles.input}
          type="text"
          readOnly
          value={inputValue}
        />
      </div>
      <div className={styles.buttons}>
        <div className={styles.numbers}>
          <Button
            onClick={onClearInputeValue}
            value="AC"
          />
          <Button
            onClick={onDeleteLastSymbol}
            value="Del"
          />
          <Button
            onClick={onChange}
            value="%"
          />
          {buttons.map((value: number) => (
            <Button
              key={value}
              onClick={onChange}
              value={value}
            />
          ))}
        </div>
        <div className={styles.operators}>
          <Button
            onClick={onChange}
            value="+"
          />
          <Button
            onClick={onChange}
            value="-"
          />
          <Button
            onClick={onChange}
            value="*"
          />
          <Button
            onClick={onChange}
            value="/"
          />
          <Button
            onClick={onCalculate}
            type="calculate"
            value="="
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;