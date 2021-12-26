import { useState } from "react";

function Content() {
  return (
    <h1>
      This is content component
    </h1>
  )
}

function Bai4() {
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

export default Bai4;
