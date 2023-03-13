export const ACTIONS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  TOGGLE: 'TOGGLE',
  DELETE_ONE: 'DELETE',
  DELETE_ALL: 'DELETE_ALL',
};

export default function taskReducer(tasks, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [...tasks, { payload, check: false }];

    case ACTIONS.UPDATE:
      return tasks.map((item) => {
        if (item.id === payload.id) {
          item.body = payload.body.trim();
          item.check = false;
        }
      });

    case ACTIONS.TOGGLE:
      return tasks.map((item) => {
        if (item.id === payload.id) {
          item.check = !item.check;
        }
      });

    case ACTIONS.DELETE_ONE:
      return tasks.filter((item) => item.id !== payload.id);

    case ACTIONS.DELETE_ALL:
      return [];

    default:
      throw new Error(`No action found for ${type}.`);
  }
}
