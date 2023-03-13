import { useState, useRef } from 'react';
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
  const { tasks, dispatch } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState('');
  const initialRef = useRef();
  const toast = useToast();

  function updateTask(id, body) {
    if (!body) return toast(updateTaskToast);
    dispatch({ type: ACTIONS.UPDATE, payload: { id, body } });
  }

  return (
    <>
      <IconButton icon={<FiEdit />} isRound='true' onClick={onOpen} />
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>Update task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder='Add task'
                defaultValue={task.body}
                onChange={(e) => setBody(e.target.value)}
                onFocus={(e) => setBody(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
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
