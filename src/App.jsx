import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTask } from './contexts/TaskContext';
import { useTaskStorage } from '../hooks/useTaskStorage';
import { Home, Profile, UserLists } from './views';
import { useActiveList } from './contexts/activeListContext';

export default function App() {
  const { tasks } = useTask();
  console.log('state', tasks);
  useTaskStorage(tasks);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/task-lists' element={<UserLists />} />
    </Routes>
  );
}
