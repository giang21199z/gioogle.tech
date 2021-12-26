import { useContext, useRef, useState } from "react";
import { addJob, removeJob, setJob } from "./actions";
import TodoProvider, { TodoContext } from "./TodoContext";

function AddTodo() {
  const inputRef = useRef();
  const todoContext = useContext(TodoContext);
  const [state, dispatch] = todoContext;

  const handleChange = (e) => {
    dispatch(setJob(e.target.value));
  }

  const handleSubmit = () => {
    dispatch(addJob(state.jobInput));
    dispatch(setJob(''));
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={state.jobInput}
        onChange={handleChange}
        placeholder="Enter job..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

function ListTodo() {
  const todoContext = useContext(TodoContext);
  const [state, dispatch] = todoContext;

  const handleRemove = (index) => {
    dispatch(removeJob(index));
  }

  return (
    <>
      <ul>
        {
          state.jobs.map((job, index) => (
            <li key={index}>{job} - <span onClick={() => handleRemove(index)}>x</span></li>
          ))
        }
      </ul>
    </>
  )
}

function Bai21() {
  return (
    <TodoProvider>
      <h1>
        This is todo list application
      </h1>
      <hr/>
      <AddTodo/>
      <hr/>
      <ListTodo/>
    </TodoProvider>
  )
}

export default Bai21;
