import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justify={'space-between'}>
      <h1>NavBar</h1>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='md'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
    </HStack>
  );
}
