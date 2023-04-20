import { Heading, VStack } from '@chakra-ui/react';
import { AddTask, TaskList } from '../components';

export default function Home() {
  return (
    <VStack p={2} minH='100vh' pb={10}>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Task List
      </Heading>
      <AddTask />
      <TaskList />
    </VStack>
  );
}
