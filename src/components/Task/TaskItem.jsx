import { memo } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { CalendarIcon, CheckIcon } from '@chakra-ui/icons';
import DeleteOne from './DeleteOne';
import UpdateTask from './UpdateTask';
import { useTask } from '../../contexts/TaskContext';

import { useActiveList } from '../../contexts/activeListContext';
import { toggleTask, deleteTask } from '../../store/taskActions';

function TaskItem({ task, listIndex }) {
  const { dispatch } = useTask();
  const { activeListId } = useActiveList();

  const handleToggleTask = () => {
    dispatch(toggleTask(activeListId, task.id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(listIndex, id));
  };

  return (
    <HStack opacity={task.check ? 0.2 : 1}>
      {task.check ? <CheckIcon /> : <CalendarIcon />}
      <Text
        w='100%'
        p='8px'
        borderRadius='lg'
        as={task.check ? 's' : ''}
        cursor='pointer'
        onClick={handleToggleTask}
      >
        {task.body}
      </Text>
      <DeleteOne task={task} />
      <UpdateTask task={task} listIndex={listIndex} />
    </HStack>
  );
}

export default memo(TaskItem);
