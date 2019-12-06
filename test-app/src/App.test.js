import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('increase function', () => {
  it('increases by 1, and resets to 0 when a max value surpassed', () => {
    const increaseFunction = (someValue, maxValue) => {
      if (someValue === maxValue) {
        someValue = 0;
        return someValue;
      } else {
        return someValue + 1;
      };
    };
    const expected = 0;
    const actual = increaseFunction(2, 2);
    expect(actual).toBe(expected);
  });
});

describe('reset function', () => {
  it('resets value to 0', () => {
    const resetFunction = someValue => {
      someValue = 0;
      return someValue;
    };

    const expected = 0;
    const actual = resetFunction(3);
    expect(actual).toBe(expected);
  });
});