import React, { createContext, useContext, useReducer } from 'react';
import taskReducer from '../store/TaskReducer';
import { useTaskStorage } from '../../hooks/useTaskStorage';

const taskContext = createContext({
  tasks: [],
  dispatch: () => {},
});

export const TaskProvider = React.memo(({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  useTaskStorage(tasks);

  console.log('context', tasks);
  return (
    <taskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </taskContext.Provider>
  );
});

export const useTask = () => useContext(taskContext);
