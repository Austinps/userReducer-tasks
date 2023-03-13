import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';

export default function DeleteOne({ task }) {
  const { tasks, dispatch } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();
  function deleteTask(id) {
    dispatch({ type: ACTIONS.DELETE, payload: { id } });
  }
  function handleDelete() {
    deleteTask(task.id);
    onClose();
  }

  return (
    <>
      <IconButton icon={<FiTrash2 />} isRound='true' onClick={onOpen} />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>delete task?</ModalHeader>
          <ModalBody>
            <Text>{task.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='blue' onClick={handleDelete}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
