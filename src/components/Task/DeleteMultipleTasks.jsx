import { useState } from 'react';
import { Button, Text, useDisclosure, useToast } from '@chakra-ui/react';
import ModalDialog from '../Modal/ModalDialog';
import { deleteToastConfig } from '../../utils/toastConfig';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { FiTrash2 } from 'react-icons/fi';

export default function DeleteMultipleTasks({
  action,
  buttonText,
  headerText,
}) {
  const { dispatch } = useTask();
  const { activeListId } = useActiveList();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    setIsLoading(true);
    try {
      await dispatch(action(activeListId));
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
        {buttonText}
        <FiTrash2 />
      </Button>
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText={headerText}
        onSubmit={handleDelete}
        isLoading={isLoading}
        cancelButtonText='Cancel'
        submitButtonText='Delete All'
      >
        <Text>are you sure?</Text>
      </ModalDialog>
    </>
  );
}
