import { Box, Select } from '@chakra-ui/react';
import { useActiveList } from '../../contexts/activeListContext';
import { useTask } from '../../contexts/TaskContext';

export default function ListSelect() {
  const { activeListId, setActiveListId } = useActiveList();
  const { tasks = [] } = useTask();
  const handleIndexChange = ({ target: { value } }) => {
    setActiveListId(value);
  };

  return (
    <Box maxW='200px'>
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
    </Box>
  );
}
