import { useEffect } from 'react';

export function useTaskStorage(tasks) {
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
}
