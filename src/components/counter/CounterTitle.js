import { memo } from 'react';

const CounterTitle = () => {
  // console.log('COUNTER TITLE RERENDER');
  return (
    <div className="h">
      <h1 className="h">Counter Title</h1>
    </div>
  );
};

export default memo(CounterTitle);
