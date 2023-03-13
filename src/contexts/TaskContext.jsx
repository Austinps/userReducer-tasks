import { createContext, useContext, useReducer } from 'react';
import taskReducer from './TaskReducer';

const taskContext = createContext([{}, () => {}]);

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <taskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </taskContext.Provider>
  );
};

export const useTask = () => useContext(taskContext);
