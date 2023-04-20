import PropTypes from 'prop-types';
import { Select } from '@chakra-ui/react';
import SingleList from '../components/Task/SingleList';
import { useTask } from '../contexts/TaskContext';
import { useActiveList } from '../contexts/activeListContext';

function Home() {
  const { activeListId, setActiveListId } = useActiveList();
  const { tasks = [] } = useTask();

  const handleIndexChange = ({ target: { value } }) => {
    setActiveListId(value);
  };

  return (
    <>
      <Select
        value={activeListId}
        onChange={handleIndexChange}
        placeholder='Select a List'
      >
        {tasks.map((list) => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </Select>
      <SingleList />
    </>
  );
}

Home.propTypes = {
  activeListId: PropTypes.string,
  tasks: PropTypes.array,
};

export default Home;
