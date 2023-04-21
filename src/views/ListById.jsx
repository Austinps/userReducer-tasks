import { useParams } from 'react-router-dom';
import { useTask } from '../contexts/TaskContext';
import { useActiveList } from '../contexts/activeListContext';
import { useEffect } from 'react';
import UpdateListForm from '../components/List/UpdateListForm';
import { AddTask, TaskList } from '../components';

export default function ListById() {
  const { id } = useParams();
  const { tasks } = useTask();
  const { setActiveListId } = useActiveList();
  const list = tasks.find((list) => list.id === id);

  useEffect(() => {
    if (list) {
      setActiveListId(list.id);
    }
  }, [list, setActiveListId]);

  return list ? (
    <>
      <UpdateListForm list={list} />
      <AddTask />
      <TaskList tasks={list.tasks} />
    </>
  ) : (
    <h2>List not found</h2>
  );
}
