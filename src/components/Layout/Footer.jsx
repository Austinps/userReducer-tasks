import { IconButton, useColorMode, Stack } from '@chakra-ui/react';
import { FaGithub, FaAt, FaVimeo } from 'react-icons/fa';

export default function SiteFooter() {
  const { colorMode } = useColorMode();

  return (
    <Stack
      direction={['column', 'row']}
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
      spacing={2}
      justify='center'
    >
      <IconButton
        as='a'
        href='https://github.com/austinps'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'
        icon={<FaGithub />}
        isRound
        size='md'
      />
      <IconButton
        as='a'
        href='mailto:austinps@pm.me?subject=Contact%20from%20website&body=Hello%20Austin,%0D%0D'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Email'
        icon={<FaAt />}
        isRound
        size='md'
      />
      <IconButton
        as='a'
        href='https://vimeo.com/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Vimeo'
        icon={<FaVimeo />}
        isRound
        size='md'
      />
    </Stack>
  );
}
