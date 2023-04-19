import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenu() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // do sign out logic here
    navigate('/'); // redirect to home page after sign out
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        size='sm'
        px={0}
        py={0}
        rounded='full'
        colorScheme='blue'
      >
        <Avatar size='sm' />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate('/')}>Bob</MenuItem>
        <MenuDivider />
        <MenuItem
          as={Button}
          variant='ghost'
          onClick={() => navigate('/profile')}
          colorScheme='blue'
        >
          Profile
        </MenuItem>
        <MenuItem
          as={Button}
          variant='ghost'
          onClick={() => navigate('/task-lists')}
          colorScheme='blue'
        >
          Lists
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}
