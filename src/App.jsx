import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTask } from './contexts/TaskContext';
import { useTaskStorage } from '../hooks/useTaskStorage';
import { Landing, Profile, UserLists, ListDetail } from './views';
import { setTasks } from './store/taskActions';

export default function App() {
  const { tasks, dispatch } = useTask();
  useTaskStorage(tasks);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    dispatch(setTasks(tasks));
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/lists/:id' element={<ListDetail />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/task-lists' element={<UserLists />} />
    </Routes>
  );
}
