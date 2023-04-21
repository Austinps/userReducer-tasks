import { AddTask, TaskList } from '..';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import UpdateListForm from './UpdateListForm';

export default function ListDetail() {
  const { tasks } = useTask();
  const { activeListId } = useActiveList();

  const list = tasks.find(({ id }) => id === activeListId);

  return list ? (
    <>
      <UpdateListForm list={list} />
      <AddTask />
      <TaskList tasks={list.tasks} />
    </>
  ) : (
    <h2>no lists yet</h2>
  );
}
