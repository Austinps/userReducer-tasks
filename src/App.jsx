import { useEffect } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { TaskList, AddTask } from './components';
import { useTask } from './contexts/TaskContext';
  
export default function App() {
  const { tasks } = useTask();
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <VStack p={4} minH='100vh' pb={28}>
        <Heading p='5' fontWeight='extrabold' size='xl'>
          Task List
        </Heading>
        <AddTask />
        <TaskList />
      </VStack>
    </>
  );
}
