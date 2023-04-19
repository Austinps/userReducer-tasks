import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useDisclosure,
  IconButton,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';
import { updateTaskToast } from '../utils/toast';
import { FiEdit } from 'react-icons/fi';

export default function UpdateTask({ task }) {
  const { dispatch } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState(task.body);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setBody(task.body);
  }, [task]);

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    onClose();
    if (!validateTaskBody(body)) {
      toast(updateTaskToast);
      setIsLoading(false);
      return;
    }
    try {
      await dispatch({ type: ACTIONS.UPDATE, payload: { id: task.id, body } });
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred while updating the task',
        status: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validateTaskBody = (body) => {
    return body.trim().length > 0;
  };

  return (
    <>
      <IconButton icon={<FiEdit />} isRound='true' onClick={onOpen} />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>Update task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                placeholder='Add task'
                value={body}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              variant='outline'
              colorScheme='gray'
              mr={3}
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              variant='outline'
              colorScheme='blue'
              onClick={handleUpdate}
              disabled={isLoading}
            >
              {isLoading ? <Spinner size='sm' /> : 'Save'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
