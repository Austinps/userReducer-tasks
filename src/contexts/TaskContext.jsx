import { createContext, useContext, useState } from 'react';

const taskContext = createContext([{}, () => {}]);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || []
  );

  return (
    <taskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </taskContext.Provider>
  );
};

export const useTask = () => useContext(taskContext);
