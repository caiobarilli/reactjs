import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/index';
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.buttons}>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increase +5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
