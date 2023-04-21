import { nanoid } from 'nanoid';
import { ACTIONS } from './constants';
const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_TASKS:
      const existingTasks = state.map((task) => task.id);
      const newTasks = payload.filter(
        (task) => !existingTasks.includes(task.id)
      );
      return [...state, ...newTasks];

    case ACTIONS.CREATE_LIST:
      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
          category: payload.type,
          tasks: [],
        },
      ];

    case ACTIONS.UPDATE_LIST:
      return state.map((list) =>
        list.id === payload.listId
          ? {
              ...list,
              name: payload.name,
              category: payload.type,
            }
          : list
      );

    case ACTIONS.DELETE_LIST:
      return state.filter((list) => list.id !== payload.listId);

    case ACTIONS.ADD_TASK:
      return state.map((list) =>
        list.id === payload.listId
          ? {
              ...list,
              tasks: [
                ...list.tasks,
                { ...payload.task, check: false, id: nanoid() },
              ],
            }
          : list
      );

    case ACTIONS.UPDATE_TASK:
      return state.map((list) =>
        list.id === payload.listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === payload.task.id
                  ? {
                      ...task,
                      body: payload.task.body.trim(),
                      check: false,
                    }
                  : task
              ),
            }
          : list
      );

    case ACTIONS.TOGGLE_TASK:
      return state.map((list) =>
        list.id === payload.listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === payload.taskId
                  ? { ...task, check: !task.check }
                  : task
              ),
            }
          : list
      );

    case ACTIONS.DELETE_TASK:
      return state.map((list) =>
        list.id === payload.listId
          ? {
              ...list,
              tasks: list.tasks.filter((task) => task.id !== payload.taskId),
            }
          : list
      );

    case ACTIONS.DELETE_ALL_TASKS:
      return state.map((list) =>
        list.id === payload.listId
          ? {
              ...list,
              tasks: [],
            }
          : list
      );

    default:
      return state;
  }
};

export default taskReducer;
