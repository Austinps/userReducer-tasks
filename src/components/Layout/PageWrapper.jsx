import { VStack } from '@chakra-ui/react';

export default function PageWrapper({ children }) {
  return (
    <VStack p={2} minH='100vh' pb={10}>
      {children}
    </VStack>
  );
}
