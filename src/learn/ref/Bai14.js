import { useEffect, useRef, useState } from "react";

function Content() {
  
  const ref = useRef(); // luon tra ve object co current co the initalValue giong initial state
  const [counter, setCounter] = useState(60);
  const prevCounter = useRef(-1);
  const h1Ref = useRef();

  // Lay gia tri prevState
  useEffect(() => {
    prevCounter.current = counter;
  }, [counter]);

  // lay DOM
  useEffect(() => {
    console.log(h1Ref.current);
    h1Ref.current.style.color = 'red';
  }, []);
  const handleStart = () => {
    ref.current = setInterval(() => {
      setCounter(prevCount => prevCount - 1);
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(ref.current);
  }

  return (
    <>
      <h1 ref={h1Ref}>
        currentCounter: {counter} - preCounter {prevCounter.current}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

function Bai14() {
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

export default Bai14;
