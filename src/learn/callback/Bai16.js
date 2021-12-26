import { memo, useCallback, useState } from "react";

const MemoContent = memo(function Content({onCounter}) {

  console.log('Content is re-render');

  return (
    <div style={{border: '1px solid #333', padding: '20px'}}>
      <h1>
        This is content component
      </h1>
      <button onClick={onCounter}>Increase render child</button>
    </div>
  )
})

function Bai16() {
  const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   setCount(count + 1);
  // }

  const handleIncrease = useCallback(() => {
    setCount(count + 1); // tại sao dùng count + 1 không đươc?
  }, []);

  return (
    <>
      <MemoContent onCounter={handleIncrease}/>
      <h1>{count}</h1>
      <p>
        <i>Việc Component con bị rerender lại nếu truyền prop vào là do thằng handleIncrease mỗi lần cha chạy lại thì nó sẽ tạo ra 1 hàm mới chứ k phải hàm cũ</i>
        <i>Vậy nên sử dụng use call back sẽ giải quyết được vấn đề này</i>
        <i>Deps mà thay đổi thì sẽ trả về tham chiếu mới và ngược lại</i>
      </p>
    </>
  )
}

export default Bai16;
