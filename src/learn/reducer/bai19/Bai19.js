import { useReducer, useRef, useState } from "react";
import { ADD_JOB, REMOVE_JOB, SET_JOB } from "./actions";
import reducer from "./reducer";

function Content() {
  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    jobInput: ''
  });

  const {jobs, jobInput} = state;

  const jobRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: SET_JOB,
      payload: e.target.value
    });
  }

  const handleSubmit = () => {
    dispatch({
      type: ADD_JOB,
      payload: jobInput
    });
    dispatch({
      type: SET_JOB,
      payload: ''
    })
    jobRef.current.focus();
  }

  const handleRemove = (index) => {
    dispatch({
      type: REMOVE_JOB,
      payload: index
    });
  }

  return (
    <div>
      <p>
        <i>Chú ý luôn phải backup ra mảng mới của state không xóa trực tiếp vào mảng state</i>
      </p>
      <input
        value={jobInput}
        placeholder="Enter job..."
        onChange={handleChange}
        ref={jobRef}
      />
      <button onClick={handleSubmit}>Submit</button>
      <hr/>
      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>{job} <span onClick={() => {handleRemove(index)}}>Remove</span></li>
          ))
        }
      </ul>
    </div>
  )
}

function Bai19() {
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

export default Bai19;
