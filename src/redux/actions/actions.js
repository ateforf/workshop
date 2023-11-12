import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from './actionTypes';

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: { id, description, isDone: false },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});