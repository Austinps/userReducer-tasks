import { Heading, VStack } from '@chakra-ui/react';

export default function TaskLists() {
  return (
    <VStack p={4} minH='100vh' pb={28}>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Task Lists
      </Heading>
      {/* Add any additional content for the task lists page here */}
    </VStack>
  );
}
