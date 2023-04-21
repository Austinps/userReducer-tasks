import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTask } from './contexts/TaskContext';
import { useTaskStorage } from '../hooks/useTaskStorage';
import { Home, Profile, UserLists } from './views';
import ListById from './views/ListById';
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
      <Route path='/' element={<Home />} />
      <Route path='/lists/:id' element={<ListById />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/task-lists' element={<UserLists />} />
    </Routes>
  );
}
