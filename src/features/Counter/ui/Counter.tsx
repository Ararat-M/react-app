import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export function Counter() {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();

  function increment() {
    dispatch(counterActions.increment());
  }

  function decrement() {
    dispatch(counterActions.decrement());
  }

  return (
    <div>
      <h1 data-testid="value">value: {value}</h1>
      <Button data-testid="decrementBtn" theme={ButtonTheme.OUTLINE} onClick={decrement}>
        Decrement
      </Button>
      <Button data-testid="incrementBtn" theme={ButtonTheme.OUTLINE} onClick={increment}>
        Increment
      </Button>
    </div>
  );
};