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

export default function DeleteOne({ task }) {
  const { tasks, setTasks } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    console.log('new', newTasks);
    setTasks([...newTasks]);
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
            <Button
              colorScheme='blue'
              onClick={() => deleteTask(task.id, onClose)}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
