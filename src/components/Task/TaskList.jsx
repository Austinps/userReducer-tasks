import { Box, VStack, Flex, StackDivider, Center } from '@chakra-ui/react';
import TaskItem from './TaskItem';
import { deleteAllTasks, deleteDoneTasks } from '../../store/taskActions';
import DeleteMultipleTasks from './DeleteMultipleTasks';

export default function TaskList({ tasks, listIndex }) {
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
      <Flex justifyContent={'space-between'}>
        <DeleteMultipleTasks
          action={deleteDoneTasks}
          headerText={'Delete completed tasks?'}
          buttonText={'done'}
        />
        <DeleteMultipleTasks
          action={deleteAllTasks}
          headerText={'Delete all tasks?'}
          buttonText={'all'}
        />
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
