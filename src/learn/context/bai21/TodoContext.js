import { createContext, useReducer } from "react";
import reducer, { initState } from "./reducer";

export const TodoContext = createContext();

function TodoProvider({children}) {

  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}
export default TodoProvider;