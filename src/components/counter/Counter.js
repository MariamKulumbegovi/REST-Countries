import { useState } from 'react';
import PropTypes, { number } from 'prop-types';
import '../../css/counter.css';
import { CounterValue } from './CounterValue';
import  CounterTitle  from './CounterTitle';

export const Counter = ({ initialValue }) => {
  const [count, Setcount] = useState(initialValue);

  const addNumber = () => {
    Setcount(count + 1);
  };
  const resetNumber = () => {
    Setcount(0);
  };
  const subtractNumber = () => {
    Setcount(count - 1);
  };
  const United = number => {
    return Setcount(count + number);
  };
  
  console.log("counter rerender")

  return (
    
    <div className="box is-flex-direction-column">
    <CounterTitle  />
     <div className="box">
      <CounterValue value={count} />
      <div className="h button-wrapper ">
        <button className="button is-info" onClick={addNumber}>
          +
        </button>
        <button className="button mx-2" onClick={subtractNumber}>
          -
        </button>
        <button className="button is-danger" onClick={resetNumber}>
          0
        </button>
      </div>
      <div className="h button-wrapper ">
        <button className="button is-link" onClick={() => United(5)}>
          5
        </button>
        <button className="button is-dark mx-2" onClick={() => United(-5)}>
          -5
        </button>
        <button className="button is-warning" onClick={() => United(10)}>
          10
        </button>
        <button className="button mx-2 is-info " onClick={() => United(-10)}>
          -10
        </button>
      </div>
      </div>
    </div>

  );
};

Counter.defaultProps = {
  initialValue: 0,
};
Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};
