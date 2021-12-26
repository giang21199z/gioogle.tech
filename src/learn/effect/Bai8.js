import { useEffect, useState } from "react";

function Bai8() {
  const [toogle, setToogle] = useState(false);
  const [openResize, setOpenResize] = useState(false);

  const handleOpenScroll = () => {
    setToogle(!toogle);
  }

  const handleOpenResize = () => {
    setOpenResize(!openResize);
  }

  return (
    <>
      <button onClick={handleOpenScroll}>Open scroll example</button>
      <button onClick={handleOpenResize}>Open resize example</button>
      <div>
        {toogle && <Content/>}
        {openResize && <Resize/>}
      </div>
    </>
  )
}

function Content() {

  const [data, setData] = useState([]);
  const [showGoToTop, setShowGoToTop] = useState(false);

  // chi goi 1 lan khi component duoc mounted tuong tu ngOnInit
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 400);
    }
    // listen dom event
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('unmounted');
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <ul>
        {
          data.map(item => (
            <li key={item.id}>{item.title || item.name}</li>
          ))
        }
      </ul>
      {showGoToTop && <button style={{position: 'fixed', bottom: 10, right: 10}}>Go Top</button>}
    </>
  )
}

function Resize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <>
      <h1>Width size: {width}</h1>
    </>
  )
}
export default Bai8;
