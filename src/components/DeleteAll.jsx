import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useTask } from '../contexts/TaskContext';

export default function DeleteAll() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setTasks } = useTask();

  return (
    <>
      <Button colorScheme='gray' mt='8' onClick={onOpen}>
        Delete All
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='blue' onClick={() => setTasks([])}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
