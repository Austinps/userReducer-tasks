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
import { ACTIONS } from '../contexts/TaskReducer';

export default function DeleteAll() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setTasks, dispatch } = useTask();

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
            <Button
              colorScheme='blue'
              onClick={() => dispatch({ type: ACTIONS.DELETE_ALL })}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
