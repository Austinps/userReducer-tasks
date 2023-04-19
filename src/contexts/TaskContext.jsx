import React, { createContext, useContext, useReducer } from 'react';
import taskReducer from './TaskReducer';

const taskContext = createContext({
  tasks: [],
  dispatch: () => {},
});

export const TaskProvider = React.memo(({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <taskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </taskContext.Provider>
  );
});

export const useTask = () => useContext(taskContext);
