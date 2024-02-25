import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  increamentByAmount,
  decreamentByCount,
} from "../features/counterSlice";
import { useState } from "react";

const Counter = () => {
  const [inputValue, setInputValue] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(increament());
  };
  const decreaseCount = () => {
    dispatch(decreament());
  };

  const increamentByValue = () => {
    dispatch(increamentByAmount(inputValue));
  };

  return (
    <div className="container">
      <h3>Counter Component</h3>

      <div className="">
        <p>{count}</p>
        <button onClick={() => increaseCount()}>Do Increament</button>{" "}
        <span> {"    "} </span>
        <button onClick={() => decreaseCount()}>Do Decreament</button>
      </div>

      <div className="mt-5">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={() => increamentByValue()}>
          Increament By Amount{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
