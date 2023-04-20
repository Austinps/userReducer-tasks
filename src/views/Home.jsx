import { Heading } from '@chakra-ui/react';
import { AddTask, TaskList } from '../components';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Task List
      </Heading>
      <AddTask />
      <TaskList />
    </PageWrapper>
  );
}
