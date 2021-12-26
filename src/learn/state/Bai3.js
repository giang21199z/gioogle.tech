import { useState } from "react";

// todo list
function Bai3() {
  const [jobs, setJobs] = useState(() => {
    // get jobs from local storage
    const initalJobs = localStorage.getItem('jobs') ?? '[]';
    console.log('get initial jobs', initalJobs);
    return JSON.parse(initalJobs);
  });
  const [jobInput, setJobInput] = useState('');

  const handleAdd = () => {
    // luu local storage
    setJobs(prevState => {
      const newState = [...jobs, jobInput];
      localStorage.setItem('jobs', JSON.stringify(newState));
      return newState;
    });
    setJobInput('');
  }

  return (
    <>
      <h1>To do list</h1>
      <p>
        <u>Lưu ý lúc sử dụng map thì sẽ phải sử dụng () thay vì dùng {}</u>
      </p>
      <p>
        <u>Lưu ý dùng toán tử ?? thay vì ||. ?? Chỉ check null và undefined</u>
      </p>
      <pre>
        {JSON.stringify(jobs)}
      </pre>
      <input
        value={jobInput}
        onChange={e => setJobInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Bai3;
