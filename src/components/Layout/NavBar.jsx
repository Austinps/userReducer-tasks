import { NavLink } from 'react-router-dom';
import {
  Box,
  IconButton,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import ProfileMenu from './ProfileMenu';
import { useAuth } from '../../contexts/UserContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function NavBar() {
  const { currentUser } = useAuth();
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
        </Link>
        <Flex alignItems='center'>
          {currentUser && <ProfileMenu />}
          <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound
            size='md'
            alignSelf='flex-end'
            ml={currentUser ? 3 : 0}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
