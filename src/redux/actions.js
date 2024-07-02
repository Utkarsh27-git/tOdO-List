export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const toggleComplete = (index) => ({
  type: TOGGLE_COMPLETE,
  payload: index,
});
