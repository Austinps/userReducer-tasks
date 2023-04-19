export const ACTIONS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  TOGGLE: 'TOGGLE',
  DELETE: 'DELETE',
  DELETE_ALL: 'DELETE_ALL',
};

const taskReducer = (tasks = [], { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD:
      return [...tasks, { ...payload, check: false }];

    case ACTIONS.UPDATE:
      return tasks.map((item) => {
        if (item.id === payload.id) {
          item.body = payload.body.trim();
          item.check = false;
        }
        return item;
      });

    case ACTIONS.TOGGLE:
      return tasks.map((item) => {
        if (item.id === payload.id) item.check = payload.check;
        return item;
      });

    case ACTIONS.DELETE:
      return tasks.filter((item) => item.id !== payload.id);

    case ACTIONS.DELETE_ALL:
      return [];

    default:
      throw new Error(`No action found for ${type}.`);
  }
};

export default taskReducer;
