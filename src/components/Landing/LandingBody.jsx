import React from 'react';
import {
  Container,
  Heading,
  Stack,
  Text,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';

const companies = [
  {
    name: 'Company 1',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41',
  },
  {
    name: 'Company 2',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
  },
  {
    name: 'Company 3',
    logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
  },
  {
    name: 'Company 4',
    logo: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb',
  },
  {
    name: 'Company 5',
    logo: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7',
  },
  {
    name: 'Company 6',
    logo: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e',
  },
];

export default function LandingBody() {
  return (
    <Container maxW='7xl' p={4}>
      <Stack direction='column' spacing={6} alignItems='center' mt={8} mb={16}>
        <Heading
          as='h1'
          fontSize='4xl'
          fontWeight='bold'
          textAlign='center'
          maxW='600px'
        >
          We're on a mission to make <br /> building lists more accessible
        </Heading>
        <Text maxW='500px' fontSize='lg' textAlign='center' color='gray.500'>
          A simple list app to practice using useReducer hook in React.
        </Text>
      </Stack>
      <Stack spacing={5} alignItems='center' mb={8}>
        <Grid
          templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
          gap={6}
          justifyContent='center'
          maxW={{ base: '500px', md: '100%' }}
        >
          {companies.map((company) => (
            <GridItem key={company.name}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                w={{ base: '8rem', md: '5rem' }}
                p={{ base: 5, md: 0 }}
              />
            </GridItem>
          ))}
        </Grid>
        <Text maxW='500px' fontSize='md' textAlign='center' color='gray.500'>
          The world's best trust us to deliver an unrivaled listing experience
          for their developers and users.
        </Text>
      </Stack>
    </Container>
  );
}
