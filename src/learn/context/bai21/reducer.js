import { ADD_JOB, REMOVE_JOB, SET_JOB } from "./actions";

export const initState = {
  jobs: [],
  jobInput: ''
}

export default function reducer(state, action) {
  let newState;
  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        jobInput: action.payload
      }
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [
          ...state.jobs,
          action.payload
        ]
      };
      break;
    case REMOVE_JOB:
      const newJobs = [
        ...state.jobs
      ];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs
      }
      break;
    default:
      throw new Error('Invalid action');
  }
  return newState;
}