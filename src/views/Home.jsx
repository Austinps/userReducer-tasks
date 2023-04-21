import PropTypes from 'prop-types';
import { VStack } from '@chakra-ui/react';
import ListDetail from '../components/Task/SingleList';

function Home() {
  return (
    <>
      <VStack w='80%'>
        <ListDetail />
      </VStack>
    </>
  );
}

Home.propTypes = {
  activeListId: PropTypes.string,
  tasks: PropTypes.array,
};

export default Home;
