import {useState} from 'react';

// inital state
const data = [1, 2, 3];

function Bai1() {
  // const [count, setCount] = useState(1);
  const [count, setCount] = useState(() => {
    console.log('tinh toan gia tri ban dau o trong callback');
    const sum = data.reduce((sum, cur) => sum + cur);
    return sum;
  });

  const [user, setUser] = useState({name: 'giang', age: 28});

  const handleIncrease = () => {
    setCount(prevState => prevState + 1);
  }
  
  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleUpdateUserWrong = () => {
    setUser({
      name: 'trang'
    });
  }

  const handleUpdateUser = () => {
    setUser({
      ...user,
      name: 'trang'
    });
  }

  console.log('re-render');

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <p>{JSON.stringify(user)}</p>
      <button onClick={handleUpdateUserWrong}>Update user wrong</button>
      <button onClick={handleUpdateUser}>Update user</button>
    </>
  )
}

export default Bai1;