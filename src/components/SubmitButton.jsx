import { Button, Spinner } from '@chakra-ui/react';

function SubmitButton({ text, isLoading }) {
  return (
    <Button
      bgGradient='linear(to-br, #228be6, #15aabf)'
      color='white'
      _hover={{ bgGradient: 'linear(to-br, #228be6, #228be6)' }}
      variant='solid'
      size='md'
      fontWeight='bold'
      type='submit'
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : text}
    </Button>
  );
}

export default SubmitButton;
