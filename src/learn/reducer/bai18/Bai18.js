import { useReducer, useState } from "react";
import { DECREASE_ACTION, INCREASE_ACTION } from "./actions";
import reducer from "./reducer";

const initialState = 0;

function Content() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch(INCREASE_ACTION);
  }

  const handleDecrease = () => {
    dispatch(DECREASE_ACTION);
  }

  return (
    <>
      <h1>
        {counter}
      </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

function Bai18(){
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
  }

  return (
    <>
      <button onClick={handleToogle}>Toogle Component</button>
      {toogle && <Content/>}
    </>
  )
}

export default Bai18;
