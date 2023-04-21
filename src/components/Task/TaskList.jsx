import {
  Box,
  VStack,
  Flex,
  StackDivider,
  Center,
} from '@chakra-ui/react';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import TaskItem from './TaskItem';
import DeleteAll from './DeleteAll';
import { ACTIONS } from '../../store/constants';

export default function TaskList({ tasks, listIndex }) {
  const { dispatch } = useTask();
  const { activeListId } = useActiveList();

  function deleteAllHandler() {
    dispatch({
      type: ACTIONS.DELETE_ALL_TASKS,
      payload: { listId: activeListId },
    });
  }

  return tasks.length ? (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='5'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
      alignItems='stretch'
    >
      {tasks.map((item) => (
        <TaskItem task={item} key={item.id} listIndex={listIndex} />
      ))}
      <Flex>
        <DeleteAll deleteAllHandler={deleteAllHandler} />
      </Flex>
    </VStack>
  ) : (
    <Box maxW='80%' p={10}>
      <Center>
        <h2>There are no tasks in this list yet.</h2>
      </Center>
    </Box>
  );
}
