import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVal, increment, decrement } from "../actions/action";

function ThunkComponent() {
  const state = useSelector((state) => state.thunk);
  const dispatch = useDispatch();
  
  return (
    <h1>      counter:{" "}
      <input type="text" name="number" id="number"
        onChange={(e) => dispatch(getVal(e.target.value))} />{" "}
      <br />
      <div>
        Counter: {state.count}
        <button onClick={() => dispatch(increment())}>++ </button>
        <button onClick={() => dispatch(decrement())}> - -</button>
      </div>
    </h1>
  );
}

export default ThunkComponent;
