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
} from '@chakra-ui/react';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';
import { updateTaskToast } from '../utils/toast';
import { FiEdit } from 'react-icons/fi';

export default function UpdateTask({ task }) {
  const { dispatch } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState('');
  const toast = useToast();

  useEffect(() => setBody(task.body), []);
  const handleChange = (e) => setBody(e.target.value);

  function updateTask(id, body) {
    onClose();
    if (!body) return toast(updateTaskToast);
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { id, body },
    });
  }

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
                defaultValue={body}
                onChange={handleChange}
                onFocus={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              variant='outline'
              colorScheme='gray'
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant='outline'
              colorScheme='blue'
              onClick={() => updateTask(task.id, body)}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
