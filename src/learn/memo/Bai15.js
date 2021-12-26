import { memo, useState } from "react";

const MemoContent = memo(function Content({count}) {

  console.log('Content is re-render');

  return (
    <h1>
      This is content component {count}
    </h1>
  )
})

function Bai15() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  }

  const handleCounter2 = () => {
    setCount2(count2 + 1);
  }

  return (
    <>
      <MemoContent count={count}/>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={handleCounter}>Increase render child</button>
      <button onClick={handleCounter2}>Increase without render child</button>
    </>
  )
}

export default Bai15;
