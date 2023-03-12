import { Link, Flex, Box, IconButton, useColorMode } from '@chakra-ui/react';

import { FaGithub, FaAt, FaVimeo } from 'react-icons/fa';

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === 'dark' ? '#151a24' : 'gray.50'}
      zIndex='333'
      position='fixed'
      left='0'
      bottom='0'
      right='0'
      as='footer'
      role='contentinfo'
      mx='auto'
      maxW='7xl'
      py='1'
      px={{ base: '4', md: '8' }}
    >
      <Flex position='absolute' bottom='5' justify={'center'} width='100%'>
        <Link href='https://github.com/austinps' target='_blank'>
          <IconButton icon={<FaGithub />} isRound='true' size='md' m='1' />
        </Link>
        <Link
          href='mailto:austinps@pm.me?subject=Contact%20from%20website&body=Hello%20Austin,%0D%0D'
          target='_blank'
        >
          <IconButton icon={<FaAt />} isRound='true' size='md' m='1' />
        </Link>
        <Link
          href='mailto:austinps@pm.me?subject=Contact%20from%20website&body=Hello%20Austin,%0D%0D'
          target='_blank'
        >
          <IconButton icon={<FaVimeo />} isRound='true' size='md' m='1' />
        </Link>
      </Flex>
    </Box>
  );
}
