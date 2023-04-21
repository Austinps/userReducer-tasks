import { useState } from 'react';
import { Text, useDisclosure, IconButton, useToast } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { deleteTask } from '../../store/taskActions';
import ModalDialog from '../ModalDialog';
import { deleteToastConfig } from '../../utils/toastConfig';

export default function DeleteTask({ task }) {
  const toast = useToast();
  const { dispatch } = useTask();
  const { activeListId } = useActiveList();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteTask = async () => {
    setIsLoading(true);
    try {
      await dispatch(deleteTask(activeListId, task.id));
      toast(deleteToastConfig.success);
      onClose();
    } catch (err) {
      console.error(err);
      toast(deleteToastConfig.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton icon={<FiTrash2 />} isRound onClick={onOpen} />
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText='delete task?'
        onSubmit={handleDeleteTask}
        isLoading={isLoading}
      >
        <Text>{task.body}</Text>
      </ModalDialog>
    </>
  );
}

DeleteTask.propTypes = {
  task: PropTypes.object.isRequired,
};
