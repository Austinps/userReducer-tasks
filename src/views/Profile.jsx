import { Heading } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';

export default function Profile() {
  return (
    <PageWrapper>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        Profile
      </Heading>
      {/* Add any additional content for the profile page here */}
    </PageWrapper>
  );
}
