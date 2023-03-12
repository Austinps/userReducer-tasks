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
      <MenuList
        zIndex={5}
        border='2px solid'
        borderColor={useColorModeValue('gray.700', 'gray.100')}
        boxShadow='4px 4px 0'
      >
        <Link
          href='https://google.com'
          _hover={{ textDecoration: 'none' }}
          isExternal
        >
          <MenuItem>
            <VStack justify='start' alignItems='left'>
              <Text fontWeight='500'>bob Jones</Text>
              <Text size='sm' color='gray.500' mt='0 !important'>
                @bob
              </Text>
            </VStack>
          </MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem>
          <Text fontWeight='500'>Dashboard</Text>
        </MenuItem>
        <MenuItem>
          <Text fontWeight='500'>Create Post</Text>
        </MenuItem>
        <MenuItem>
          <Text fontWeight='500'>Reading List</Text>
        </MenuItem>
        <MenuItem>
          <Text fontWeight='500'>Settings</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Text fontWeight='500'>Sign Out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
