import { Heading, VStack } from '@chakra-ui/react';

export default function Profile() {
  return (
    <VStack p={4} minH='100vh' pb={28}>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Profile
      </Heading>
      {/* Add any additional content for the profile page here */}
    </VStack>
  );
}
