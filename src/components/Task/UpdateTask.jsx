import { useState, useEffect } from 'react';
import {
  Input,
  FormControl,
  useDisclosure,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { FiEdit } from 'react-icons/fi';
import { updateTask } from '../../store/taskActions';
import ModalDialog from '../Modal/ModalDialog';
import { updateToastConfig } from '../../utils/toastConfig';

export default function UpdateTask({ task }) {
  const { dispatch } = useTask();
  const { activeListId } = useActiveList();
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
    if (!validateTaskBody(body)) {
      toast(updateToastConfig.invalidName);
      setIsLoading(false);
      return;
    }
    try {
      await dispatch(updateTask({ id: task.id, body }, activeListId));
      onClose();
      toast(updateToastConfig.success);
    } catch (err) {
      console.error(err);
      toast(updateToastConfig.error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateTaskBody = (body) => {
    return body.trim().length > 0;
  };

  return (
    <>
      <IconButton icon={<FiEdit />} isRound onClick={onOpen} />
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText='update task?'
        onSubmit={handleUpdate}
        isLoading={isLoading}
      >
        <FormControl>
          <Input placeholder='Add task' value={body} onChange={handleChange} />
        </FormControl>
      </ModalDialog>
    </>
  );
}
