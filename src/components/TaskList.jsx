import { Box, VStack, Flex, StackDivider, Center } from '@chakra-ui/react';
import { useTask } from '../contexts/TaskContext';
import TaskItem from './TaskItem';
import DeleteAll from './DeleteAll';

export default function TaskList() {
  const { tasks } = useTask();

  if (!tasks.length) {
    return (
      <>
        <Box maxW='80%' p={10}>
          <Center>
            {' '}
            <h2>Nothing to see here....</h2>
          </Center>
        </Box>
      </>
    );
  }
  return (
    <>
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
        {tasks.map((task, index) => (
          <TaskItem task={task} key={task.id} num={index + 1} />
        ))}
      </VStack>

      <Flex>
        <DeleteAll />
      </Flex>
    </>
  );
}
