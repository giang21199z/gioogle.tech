import { useState } from "react";

const gifts = [
  'CPU i9',
  'RAM 32GB RBG',
  'RGB Keyboard'
];

const courses = [
  {
    id: 1,
    name: 'Javascript'
  },
  {
    id: 2,
    name: 'PHP'
  },
  {
    id: 3,
    name: 'Java'
  }
];

function Bai2() {

  const [name, setName] = useState('');
  const [gift, setGift] = useState();
  const [courseId, setCourseId] = useState(1);
  const [courseCb, setCourseCb] = useState([]);

  const handleGetGift = () => {
    setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleClick = () => {
    setName('Nguyen dinh giang');
  }

  const handleChangeRadio = (id) => {
    setCourseId(id);
  }

  const handleGetCourse = () => {
    console.log(courseId);
  }

  const handleChangeCheckbox = (id) => {
    if (!courseCb.includes(id)) {
      // chua ton tai
      setCourseCb(prevState => {
        return [...prevState, id];
      })
    } else {
      setCourseCb(prevState => {
        return prevState.filter(item => item != id);
      })
      
    }
  }

  const handleGetCourses = () => {
    console.log(courseCb);
  }

  console.log('re-render');

  return (
    <>
      <div>
        <h1>{gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={handleGetGift}>Lấy phần thưởng</button>
      </div>
      <hr/>
      <div>
        <i>Two ways binding with input</i>
      </div>
      <input
        value={name}
        onChange={handleChangeName}
      />
      <button onClick={handleClick}>Change Name</button>
      <hr/>
      <div>
        <i>Two ways binding with radio</i>
      </div>
      {
        courses.map(item => (
          <label key={item.id} style={{display: 'block'}}>
            <input type="radio" checked={courseId === item.id} onChange={() => handleChangeRadio(item.id)}/>
            {` ${item.name}`}
          </label>
        ))
      }
      <button onClick={handleGetCourse}>Get course</button>
      <hr/>
      <div>
        <i>Two ways binding with checkbox</i>
        <pre>
          {JSON.stringify(courseCb)}
        </pre>
      </div>
      <div>
        <u>Lưu ý sử dụng filter để lọc những component uncheck</u>
      </div>
      <div>
        <u>Radio & checkbox nên chỉ lưu id</u>
      </div>
      {
        courses.map(item => (
          <label key={item.id} style={{display: 'block'}}>
            <input
              type="checkbox"
              checked={courseCb.includes(item.id)}
              onChange={() => handleChangeCheckbox(item.id)}
            />
            {` ${item.name}`}
          </label>
        ))
      }
      <button onClick={handleGetCourses}>Get Courses</button>  
    </>
  );
}
export default Bai2;