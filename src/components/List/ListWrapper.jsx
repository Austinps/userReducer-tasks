import { useState } from 'react';
import { Heading, VStack, Box, Button, useDisclosure } from '@chakra-ui/react';
import { dummyData } from '../../data/dummyData';
import NewListModal from './NewListModal';

export default function ListWrapper({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [type, setType] = useState('personal');

  function handleSubmit(e) {
    e.preventDefault();
    const newList = {
      id: `list${dummyData.length + 1}`,
      name,
      type,
      tasks: [],
    };
    dummyData.push(newList);
    setName('');
    setType('personal');
    onClose();
  }

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
        <Button onClick={onOpen} mb='5' colorScheme='teal'>
          Create New List
        </Button>
        {children}
      </VStack>
      <NewListModal
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        setName={setName}
        type={type}
        setType={setType}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
