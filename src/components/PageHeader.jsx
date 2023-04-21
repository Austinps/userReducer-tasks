import { Heading } from '@chakra-ui/react';

export default function PageHeader({ headertext }) {
  return (
    <Heading p='5' fontWeight='extrabold' size='xl'>
      {headertext}
    </Heading>
  );
}
