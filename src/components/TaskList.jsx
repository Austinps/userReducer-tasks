import { Box, VStack, Flex, StackDivider, Center } from '@chakra-ui/react';
import { useTask } from '../contexts/TaskContext';
import TaskItem from './TaskItem';
import DeleteAll from './DeleteAll';

export default function TaskList() {
  const { tasks } = useTask();

  return (
    <>
      {tasks.length < 1 ? (
        <Box maxW='80%' p={10}>
          <Center>
            <h2>Nothing to see here....</h2>
          </Center>
        </Box>
      ) : (
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
            {tasks?.map((item) => (
              <TaskItem task={item} key={item.id} />
            ))}
          </VStack>

          <Flex>
            <DeleteAll />
          </Flex>
        </>
      )}
    </>
  );
}
