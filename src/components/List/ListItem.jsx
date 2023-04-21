import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ListItem({ list }) {
  return (
    <Box>
      <Link to={`/lists/${list.id}`}>
        {' '}
        <Text fontSize='xl' fontWeight='bold'>
          {list.name}
        </Text>
      </Link>
      <Text>Total Tasks: {list.tasks.length}</Text>
      <Text>
        Completed Tasks: {list.tasks.filter((task) => task.check).length}
      </Text>
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
