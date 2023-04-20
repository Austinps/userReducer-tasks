import { Heading } from '@chakra-ui/react';
import { ListItem } from '../components';
import ListWrapper from '../components/List/ListWrapper';
import { useTask } from '../contexts/TaskContext';

export default function UserLists() {
  const { tasks } = useTask();

  return (
    <ListWrapper>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Your Lists
      </Heading>
      {tasks.map((list) => (
        <ListItem key={list.id} list={list} />
      ))}
    </ListWrapper>
  );
}
