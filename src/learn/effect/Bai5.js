import { useEffect, useState } from "react";

function Bai5() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log('call useEffect');
    document.title = title;
  });

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  return (
    <>
      <h1>Change title</h1>
      <input
        value={title}
        onChange={handleTitle}
      />
      {console.log('re-render')}
    </>
  )
}

export default Bai5;