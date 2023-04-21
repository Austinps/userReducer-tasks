import { Box, Text, Progress } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteList from './DeleteList';
import UpdateList from './UpdateList';

export default function ListItem({ list }) {
  const completedTasks = list.tasks.filter((task) => task.check).length;
  const totalTasks = list.tasks.length;

  return (
    <Box>
      <Link to={`/lists/${list.id}`}>
        {' '}
        <Text fontSize='xl' fontWeight='bold'>
          {list.name}
        </Text>
      </Link>
      <Text>Total Tasks: {totalTasks}</Text>
      <Text>Completed Tasks: {completedTasks}</Text>
      <Progress
        value={(completedTasks / totalTasks) * 100}
        size='sm'
        colorScheme='green'
        mt={2}
        mb={2}
      />
      <DeleteList list={list} />
      <UpdateList list={list} />
    </Box>
  );
}

ListItem.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        check: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
