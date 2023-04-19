import { Heading, VStack } from '@chakra-ui/react';
import { AddTask, TaskList } from '../components';

export default function Home() {
  return (
    <VStack p={4} minH='100vh' pb={28}>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Task List
      </Heading>
      <AddTask />
      <TaskList />
      {/* Add any additional content for the task lists page here */}
    </VStack>
  );
}