import {
  Container,
  Box,
  Avatar,
  IconButton,
  Button,
  HStack,
  VStack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  MenuDivider,
  useColorModeValue,
  useColorMode,
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
        <Image
          alt='logo'
          w={'auto'}
          h={12}
          src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
        />

        <Input
          maxW='26rem'
          placeholder='Search...'
          borderColor={useColorModeValue('gray.300', 'white')}
          borderRadius='5px'
          d={{ base: 'none', md: 'block' }}
        />

        <Button
        // color='#fff'
        // rounded='md'
        // bg='#3b49df'
        // _hover={{ bg: '#323ebe' }}
        >
          Create List
        </Button>
        <Spacer />
        <HStack spacing={3}>
          {authUser ? <ProfileMenu /> : <ProfileMenu />}
          <IconButton>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              role='img'
              aria-labelledby='ap1tc5wqdskeg9i5jtulggx2n8axe0vz'
            >
              <title id='ap1tc5wqdskeg9i5jtulggx2n8axe0vz'>Notifications</title>
              <path d='M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z'></path>
            </svg>
          </IconButton>
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
