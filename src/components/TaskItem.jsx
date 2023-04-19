import { HStack, Text } from '@chakra-ui/react';
import { CalendarIcon, CheckIcon } from '@chakra-ui/icons';
import DeleteOne from './DeleteOne';
import UpdateTask from './UpdateTask';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';

function TaskItem({ task }) {
  const { dispatch } = useTask();

  function toggleTask(id) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id, check: !task.check } });
  }

  return (
    <HStack opacity={task.check ? 0.2 : 1}>
      {task.check ? <CheckIcon /> : <CalendarIcon />}
      <Text
        w='100%'
        p='8px'
        borderRadius='lg'
        as={task.check ? 's' : ''}
        cursor='pointer'
        onClick={() => toggleTask(task.id)}
      >
        {task.body}
      </Text>
      <DeleteOne task={task} />
      <UpdateTask task={task} />
    </HStack>
  );
}

export default TaskItem;
