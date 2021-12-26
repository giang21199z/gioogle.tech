import { useMemo, useRef, useState } from "react";

function Content() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const refName = useRef();

  const handleSubmit = () => {
    console.log(name, price);
    setProducts([
      ...products,
      {
        name,
        price: +price
      }
    ]);
    setName('')
    setPrice(0);
    refName.current.focus();
  }

  const total = useMemo(() => {
    const ans = products.reduce((ans, product) => (ans + product.price), 0);
    return ans;
  }, [products])

  return (
    <>
      <div>
        <input
          ref={refName}
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Enter price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <hr/>
      <div>
        Total: {total}
      </div>
      <ul>
        {
          products.map((product, index) => (
            <li key={index}>{product.name} - {product.price}</li>
          ))
        }
      </ul>
    </>
  )
}

function Bai17() {
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

export default Bai17;
