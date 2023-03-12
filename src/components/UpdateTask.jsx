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
import { updateTaskToast } from '../utils/toast';
import { FiEdit } from 'react-icons/fi';

export default function UpdateTask({ task }) {
  const { tasks, setTasks } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState('');
  const initialRef = useRef();
  const toast = useToast();

  function updateTask(id, body, onClose) {
    const info = body.trim();

    if (!info) {
      toast(updateTaskToast);

      return;
    }

    const newTasksUpdate = tasks.map((task) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });

    setTasks(newTasksUpdate);

    onClose();
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
              onClick={() => updateTask(task.id, body, onClose)}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
