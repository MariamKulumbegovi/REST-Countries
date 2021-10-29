import { memo } from 'react';

const CounterAction = ({ label, onclick }) => {
  console.log('Counter action');
  return (
    <button className="button is-warning" onClick={onclick}>
      {label}
    </button>
  );
};

export default memo(CounterAction);
