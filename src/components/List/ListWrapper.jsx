import { useState } from 'react';
import { Heading, VStack, Box, Button, useDisclosure } from '@chakra-ui/react';
import { dummyData } from '../../data/dummyData';
import CreateListForm from './CreateListForm';

export default function ListWrapper({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [type, setType] = useState('personal');

  

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
