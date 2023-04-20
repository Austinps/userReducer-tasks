import { ACTIONS } from './constants';

export const createList = (body) => ({
  type: ACTIONS.CREATE_LIST,
  payload: { ...body },
});

export const updateList = (body, listId) => ({
  type: ACTIONS.UPDATE_LIST,
  payload: { ...body, listId: listId },
});

export const addTask = (task, listId) => ({
  type: ACTIONS.ADD_TASK,
  payload: { listId, task },
});

export const updateTask = (body, listId) => ({
  type: ACTIONS.UPDATE_TASK,
  payload: { listId, task: { ...body } },
});

export const toggleTask = (listId, taskId) => ({
  type: ACTIONS.TOGGLE_TASK,
  payload: { listId, taskId },
});

export const deleteTask = (listId, taskId) => ({
  type: ACTIONS.DELETE_TASK,
  payload: { listId, taskId },
});

export const deleteList = ({ id }) => ({
  type: ACTIONS.DELETE_LIST,
  payload: { id },
});

export const clearList = ({ id }) => ({
  type: ACTIONS.DELETE_ALL_TASKS,
  payload: { id },
});
