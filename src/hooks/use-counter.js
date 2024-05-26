import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(+initialValue);

  const handleIncrease = () => setCount(prevCount => prevCount + 1);

  return {
    count: count,
    increase: handleIncrease,
  };
};

export default useCounter;
