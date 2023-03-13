import { NavLink } from 'react-router-dom';
import {
  Container,
  IconButton,
  Button,
  HStack,
  Image,
  Input,
  Spacer,
  useColorModeValue,
  useColorMode,
  Link,
} from '@chakra-ui/react';
import ProfileMenu from './ProfileMenu';
import { useAuth } from '../../contexts/UserContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function NavBar() {
  const { authUser } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW='1280px' px={4}>
      <HStack spacing={4}>
        <NavLink to='/'>
          <Image
            alt='logo'
            w={'auto'}
            h={12}
            src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
          />
        </NavLink>

        <Input
          maxW='26rem'
          placeholder='Search lists...'
          borderColor={useColorModeValue('gray.300', 'white')}
          borderRadius='5px'
          d={{ base: 'none', md: 'block' }}
        />

        <Button>
          <NavLink to='/new'>Create List</NavLink>
        </Button>
        <Spacer />
        <HStack spacing={3}>
          {authUser ? <ProfileMenu /> : <ProfileMenu />}

          <Spacer />
          <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound='true'
            size='md'
            alignSelf='flex-end'
            onClick={toggleColorMode}
          />
        </HStack>
      </HStack>
    </Container>
  );
}
