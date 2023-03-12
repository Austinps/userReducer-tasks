import {
  Avatar,
  Button,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  MenuDivider,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ProfileMenu() {
  return (
    <Menu isLazy>
      <MenuButton as={Button} size='sm' px={0} py={0} rounded='full'>
        <Avatar size='sm' src={''} />
      </MenuButton>
      <MenuList>
        <Link
          href='https://google.com'
          _hover={{ textDecoration: 'none' }}
          isExternal
        >
          <MenuItem>Bob</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem>Profile</MenuItem>

        <MenuItem>Lists</MenuItem>
        <MenuDivider />
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}
