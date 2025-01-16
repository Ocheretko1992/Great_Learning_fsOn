import { useEffect, useState } from "react";
import s from "./Counter.module.css";
import { clsx } from "clsx";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {}, []);

  const handleMinysClick = () => {
    if (counter <= 0) return;
    setCounter((prev) => prev - step);
  };

  const handlePlusClick = () => {
    setCounter((prev) => prev + step);
  };
  const handlerReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.wraper}>
      <div className={clsx(s.align, counter < 0 && s.updateAlign)}>
        <h1 className={s.h1}>{counter}</h1>
        <input
          className={s.inputStep}
          value={step}
          type="text"
          onChange={(e) => setStep(+e.target.value)}
        />

        <div className={s.buttonWraper}>
          <button
            onClick={handleMinysClick}
            className={clsx(s.button, counter < 0 && s.updateButton)}>
            Minus
          </button>
          <button onClick={handlerReset} className={s.button}>
            Reset
          </button>
          <button onClick={handlePlusClick} className={s.button}>
            Plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
