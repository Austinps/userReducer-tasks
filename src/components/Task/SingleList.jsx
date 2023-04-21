import { AddTask, TaskList } from '..';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import PropTypes from 'prop-types';
import UpdateListForm from '../List/UpdateListForm';

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

ListDetail.propTypes = {
  activeListId: PropTypes.string.isRequired,
};
