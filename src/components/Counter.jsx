import { useState } from 'react';

console.log(import.meta.env);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => setCounter(prevCount => prevCount + 1);

  return (
    <form className="flex flex-col gap-y-3 px-12 py-3">
      <input value={counter} readOnly className="input border-none" />
      <button
        type="button"
        onClick={handleIncrease}
        className="cursor-pointer self-center rounded-md bg-gray-100 px-[14px] py-2 text-lg font-bold text-violet-500 transition duration-100 hover:brightness-90"
      >
        Increase
      </button>
    </form>
  );
};

export default Counter;
