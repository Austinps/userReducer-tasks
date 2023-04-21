import { Stack, Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Stack direction='column' spacing={6} alignItems='center'>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        w={{ base: '100%', sm: 'auto' }}
        spacing={5}
      >
        <Button
          colorScheme='teal'
          variant='outline'
          rounded='md'
          size='lg'
          height='3.5rem'
          fontSize='1.2rem'
          onClick={() => console.log('Get Started clicked')}
        >
          Get Started
        </Button>
        <Button
          leftIcon={<FaGithub />}
          colorScheme='gray'
          variant='outline'
          rounded='md'
          size='lg'
          height='3.5rem'
          fontSize='1.2rem'
          onClick={() => window.open('https://github.com/austinps')}
        >
          Github
        </Button>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
