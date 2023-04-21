import { ListItem } from '../components';
import ListWrapper from '../components/List/ListWrapper';
import { useTask } from '../contexts/TaskContext';
import CreateListForm from '../components/List/CreateListForm';
import PageHeader from '../components/PageHeader';

export default function UserLists() {
  const { tasks } = useTask();

  return (
    <ListWrapper>
      <PageHeader headertext={'Your Lists'} />
      <CreateListForm />
      {tasks.map((list) => (
        <ListItem key={list.id} list={list} />
      ))}
    </ListWrapper>
  );
}
