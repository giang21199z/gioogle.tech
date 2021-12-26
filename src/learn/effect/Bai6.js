import { useEffect, useState } from "react";

function Bai6() {
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

function Content() {

  const [post, setPost] = useState([]);

  // chi goi 1 lan khi component duoc mounted tuong tu ngOnInit
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(post => {
        setPost(post);
      });
    
  }, [])
  return (
    <>
      <h1>
        List post
      </h1>
      <ul>
        {
          post.map(item => (
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Bai6;
