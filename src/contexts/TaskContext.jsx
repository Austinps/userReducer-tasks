import React, { createContext, useContext, useReducer, useEffect } from 'react';
import taskReducer from '../store/TaskReducer';
import { ACTIONS } from '../store/constants';

const taskContext = createContext({
  tasks: [],
  dispatch: () => {},
});

export const TaskProvider = React.memo(({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const initialTasks = localStorage.getItem('tasks');
    if (initialTasks) {
      dispatch({ type: ACTIONS.SET_TASKS, payload: JSON.parse(initialTasks) });
    }
  }, []);

  return (
    <taskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </taskContext.Provider>
  );
});

export const useTask = () => useContext(taskContext);
