import { HStack, Text } from '@chakra-ui/react';
import DeleteOne from './DeleteOne';
import UpdateTask from './UpdateTask';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';
import { CalendarIcon, CheckIcon } from '@chakra-ui/icons';

function TaskItem({ task }) {
  const { tasks, dispatch } = useTask();

  function checkTask(id) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id, check: !task.check } });
  }

  return (
    <HStack opacity={task.check == true ? '0.2' : '1'}>
      {task.check ? <CheckIcon /> : <CalendarIcon />}
      <Text
        w='100%'
        p='8px'
        borderRadius='lg'
        as={task.check == true ? 's' : ''}
        cursor='pointer'
        onClick={() => checkTask(task.id)}
      >
        {task.body}
      </Text>
      <DeleteOne task={task} />
      <UpdateTask task={task} />
    </HStack>
  );
}

export default TaskItem;
