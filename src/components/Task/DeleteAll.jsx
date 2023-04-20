import { useState } from 'react';
import { Button, useDisclosure, useToast } from '@chakra-ui/react';
import ModalDialog from '../ModalDialog';
import { deleteToastConfig } from '../../utils/toastConfig';

export default function DeleteAll({ deleteAllHandler }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteAll() {
    setIsLoading(true);
    try {
      await deleteAllHandler();
      toast(deleteToastConfig.success);
      onClose();
    } catch (err) {
      console.error(err);
      toast(deleteToastConfig.error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Button colorScheme='gray' mt='8' onClick={onOpen}>
        Clear All
      </Button>
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText='Are you sure you want to delete all items?'
        onSubmit={handleDeleteAll}
        isLoading={isLoading}
        cancelButtonText='Cancel'
        submitButtonText='Delete All'
      >
        <p>Are you sure you want to delete all items?</p>
      </ModalDialog>
    </>
  );
}
