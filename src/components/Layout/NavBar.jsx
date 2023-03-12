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
        <Spacer />
        <Button
          color='#fff'
          rounded='md'
          bg='#3b49df'
          _hover={{ bg: '#323ebe' }}
        >
          Create List
        </Button>
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
