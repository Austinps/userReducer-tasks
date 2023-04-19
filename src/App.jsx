import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useTask } from './contexts/TaskContext';
import { useTaskStorage } from '../hooks/useTaskStorage';
import { Home, Profile, TaskLists } from './views';

export default function App() {
  const { tasks } = useTask();
  useTaskStorage(tasks);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/task-lists' element={<TaskLists />} />
    </Routes>
  );
}
