import { useDispatch, useSelector } from 'react-redux';
import useCounter from '../../hooks/use-counter';
import { counterSlice } from '../../store/reducers/counterReducer';

console.log(import.meta.env);

const Counter = () => {
  const counterHook = useCounter(0);
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counterSlice.actions.increaseCounter());
  };

  return (
    <form className="flex flex-col gap-y-3 px-12 py-3">
      <input value={counterHook.count} readOnly className="primary-input" />
      <button
        type="button"
        onClick={counterHook.increase}
        className="primary-button"
      >
        Increase (using custom hook)
      </button>
      <input value={count} readOnly className="primary-input" />
      <button type="button" onClick={handleIncrease} className="primary-button">
        Increase (using redux toolkit)
      </button>
    </form>
  );
};

export default Counter;
