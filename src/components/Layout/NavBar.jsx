import { NavLink } from 'react-router-dom';
import {
  Box,
  IconButton,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import ProfileMenu from './ProfileMenu';
import { FaSun, FaMoon } from 'react-icons/fa';
import ListSelect from './ListSelect';
import CreateListForm from '../List/CreateListForm';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as='nav'
      borderBottom='1px'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      py={2}
    >
      <Flex
        alignItems='center'
        justifyContent='space-between'
        maxW='1280px'
        mx='auto'
        px={4}
      >
        <Link as={NavLink} to='/' fontWeight='bold' fontSize='lg'>
          Task
        </Link>{' '}
        <HStack align={'center'}>
          {' '}
          <ListSelect />
          <CreateListForm />
        </HStack>
        <Flex alignItems='center'>
          <ProfileMenu />
          <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound
            size='md'
            alignSelf='flex-end'
            ml={3}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
