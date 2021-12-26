import { DECREASE_ACTION, INCREASE_ACTION } from "./actions";

const reducer = (state, action) => {
  switch(action) {
    case INCREASE_ACTION:
      return state + 1;
    case DECREASE_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
}

export default reducer;