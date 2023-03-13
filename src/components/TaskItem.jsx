import { HStack, Text } from '@chakra-ui/react';
import DeleteOne from './DeleteOne';
import UpdateTask from './UpdateTask';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';
import { CalendarIcon, CheckIcon } from '@chakra-ui/icons';

function TaskItem({ task, num }) {
  const { tasks, dispatch } = useTask();

  function checkTask(todoId) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId } });
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
        {num}. {task.body}
      </Text>
      <DeleteOne task={task} />
      <UpdateTask task={task} />
    </HStack>
  );
}

export default TaskItem;
