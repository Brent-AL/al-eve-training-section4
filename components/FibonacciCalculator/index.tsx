import React, { useState } from "react";
import styles from "../../styles/Calculator.module.css";
import FibonacciOutput from "../FibonacciOutput";

function FibonacciCalculator() {
  // Q4.2 Here
  const [result, setResult] = useState<number>(0);

  const handleNthUpdate = (value: number) => {
    // Q4.3 Here
    setResult(value);
  };

  return (
    <div className={styles["cal-container"]}>
      <div className={styles["cal-input"]}>
        <label htmlFor="nth-value">Input a n-th Value:</label>
        <input
          type="number"
          id="nth-value"
          value={result}
          onChange={(event) => {
            handleNthUpdate(event.target.value);
          }}
        ></input>

        <button id="cal-btn" onClick={(event) => handleNthUpdate(event)}>
          Calculate
        </button>
      </div>
      <div className={styles["cal-output"]}>
        <div>
          {/* Q4.4 here */}
          <FibonacciOutput nth_term={result} />
        </div>
      </div>
    </div>
  );
}

export default FibonacciCalculator;
