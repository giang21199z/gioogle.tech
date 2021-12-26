import { useState, useEffect } from "react";

function Bai11() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => {setShow(!show)}}>Toogle</button>
      {show &&  <Content/>}
    </>
  )
}

const lessions = [
  {
    id: 1,
    title: 'Lession 1'
  },
  {
    id: 2,
    title: 'Lession 2'
  },
  {
    id: 3,
    title: 'Lession 3'
  }
];

function Content() {
  const [lessionId, setLessionId] = useState();
  
  useEffect(() => {
    const handleEvent = (e) => {
      console.log(e.detail);
    };

    if (lessionId != undefined) {
      window.addEventListener(`lesson-${lessionId}`, handleEvent)
    }
    return () => {
      window.removeEventListener(`lesson-${lessionId}`, handleEvent)
    }
  }, [lessionId]);
  
  return (
    <>
      {
        lessions.map(item => (
          <button onClick={() => setLessionId(item.id)} style={item.id ===  lessionId ? {color: 'red'} : {}} key={item.id}>{item.title}</button>
        ))
      }
    </>
  )  
}
export default Bai11;