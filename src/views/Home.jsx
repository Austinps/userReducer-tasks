import { Heading } from '@chakra-ui/react';
import { AddTask, TaskList } from '../components';
import PageWrapper from '../components/Layout/PageWrapper';

export default function Home() {
  return (
    <>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Task List
      </Heading>
      <AddTask />
      <TaskList />
    </>
  );
}
