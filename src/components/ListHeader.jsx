import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

export default function ListHeader({ list, action }) {
  return (
    <>
      <Flex alignItems='center'>
        <Heading p='5' fontWeight='extrabold' size='xl' flex='1'>
          {list.name}
        </Heading>
        <IconButton
          icon={<FiEdit />}
          aria-label='Edit list'
          variant='outline'
          colorScheme='gray'
          onClick={action}
        />
      </Flex>
    </>
  );
}
