import { VStack, Box } from '@chakra-ui/react';

export default function ListWrapper({ children }) {
  return (
    <>
      <VStack
        divider={<Box borderBottom='1px solid' borderColor='gray.200' />}
        borderColor='gray.100'
        borderWidth='2px'
        p='5'
        borderRadius='lg'
        w='100%'
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
        alignItems='stretch'
      >
        {children}
      </VStack>
    </>
  );
}
