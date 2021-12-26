import { useState, useEffect, useLayoutEffect } from "react";

function Bai12() {
  const [toogle, setToogle] = useState(false);
  
  const handleToogle = () => {
    setToogle(!toogle);
  }
  
  return (
    <>
      <button onClick={handleToogle}>Toogle Component</button>
        <p>UseEffect</p>
        <ul>
          <li>1. Cập nhật lại state</li>
          <li>2. Cập nhật lại DOM</li>
          <li>3. Render lại UI</li>
          <li>4. Gọi cleanup nếu deps thay đổi</li>
          <li>5. Gọi useEffect callback</li>
        </ul>
        <p>UseLayoutEffect</p>
        <ul>
          <li>1. Cập nhật lại state</li>
          <li>2. Cập nhật lại DOM</li>
          <li>3. Gọi cleanup nếu deps thay đổi</li>
          <li>4. Gọi UseLayoutEffect callback sync</li>
          <li>5. Render lại UI</li>
        </ul>
      {toogle && <Content/>}
    </>
  )
}

function Content() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    if (counter1 > 3) {
      setCounter1(0);
    }
  }, [counter1]);

  useLayoutEffect(() => {
    if (counter2 > 3) {
      setCounter2(0);
    }
  }, [counter2]);

  const handleClick1 = () => {
    setCounter1(counter1 + 1);
  }
  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  }

  return (
    <>
      <h3>
        Ứng dụng đếm số có giới hạn. Issue xảy ra khi về 4 bị nhấp nháy màn hình khi sử dụng useEffect
      </h3>
      <p>
        Sử dụng useEffect
      </p>
      <h1>{counter1}</h1>
      <button onClick={handleClick1}>Increase1</button>
      <p>
        Sử dụng UseLayoutEffect
      </p>
      <h1>{counter2}</h1>
      <button onClick={handleClick2}>Increase2</button>
    </>
  )
}

export default Bai12;
