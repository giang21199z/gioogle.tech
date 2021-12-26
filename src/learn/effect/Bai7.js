import { useEffect, useState } from "react";

function Bai7() {
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
  }

  return (
    <>
      <button onClick={handleToogle}>Toogle Component</button>
      <div>
        {toogle && <Content/>}
      </div>
    </>
  )
}

const tabs = ['posts', 'comments', 'albums'];

function Content() {

  const [data, setData] = useState([]);
  const [type, setType] = useState('posts');

  // chi goi 1 lan khi component duoc mounted tuong tu ngOnInit
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, [type]);

  const handleClickTab = (type) => {
    console.log(type);
    setType(type);
  }

  return (
    <>
      {
        tabs.map((tab, index) => (
          <button
            style={tab === type ? {color: '#fff', backgroundColor: '#333'} : {}}
            onClick={() => handleClickTab(tab)}
            key={index}
          >
            {tab}
          </button>
        ))
      }
      <ul>
        {
          data.map(item => (
            <li key={item.id}>{item.title || item.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Bai7;
