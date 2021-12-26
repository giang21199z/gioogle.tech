export const ADD_JOB = 'ADD_JOB';
export const SET_JOB = 'SET_JOB';
export const REMOVE_JOB = 'REMOVE_JOB';

export const setJob = payload => ({
  type: SET_JOB,
  payload
});

export const addJob = payload => ({
  type: ADD_JOB,
  payload
});

export const removeJob = index => ({
  type: REMOVE_JOB,
  payload: index
})