import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  const resetValues = () => {
    setBallCount(0);
    setStrikeCount(0);
  };

  const increaseStrike = () => {
    if (strikeCount === 2) {
      resetValues();
    } else {
      setStrikeCount(strikeCount + 1);
    };
  };

  const increaseBall = () => {
    if (ballCount === 3) {
      resetValues();
    } else {
      setBallCount(ballCount + 1);
    };
  };

  const increaseFoul = () => {
    if (strikeCount < 2) {
      setStrikeCount(strikeCount + 1);
    }
  };

  return (
    <div className="App">
      <Display ballCount={ballCount} strikeCount={strikeCount} />
      <Dashboard resetValues={resetValues} increaseStrike={increaseStrike} increaseBall={increaseBall} increaseFoul={increaseFoul} />
    </div>
  );
}

export default App;
