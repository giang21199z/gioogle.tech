import { useState, useEffect } from "react";

function Bai9() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => {setShow(!show)}}>Toogle</button>
      {show &&  <Content/>}
    </>
  )
}
function Content() {
  const [counter, setCounter] = useState(180);

  useEffect(() => {
    const timeId = setInterval(() => {
      console.log('decrease');
      setCounter(prevState => prevState - 1);
    }, 1000);

    return () => {
      clearInterval(timeId);
    }
  }, []);

  return (
    <>
      <h1>{counter}</h1>
    </>
  )
}
export default Bai9;