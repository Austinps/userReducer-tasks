import { useState } from 'react';
import { Text, useDisclosure, IconButton, useToast } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useTask } from '../../contexts/TaskContext';
import { deleteList } from '../../store/taskActions';
import ModalDialog from '../Modal/ModalDialog';
import { deleteToastConfig } from '../../utils/toastConfig';

export default function DeleteList({ list }) {
  const toast = useToast();
  const { dispatch } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteList = async () => {
    setIsLoading(true);
    try {
      await dispatch(deleteList(list.id));
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
        headerText='delete this list?'
        onSubmit={handleDeleteList}
        isLoading={isLoading}
      >
        <Text>{list.name}</Text>
      </ModalDialog>
    </>
  );
}

DeleteList.propTypes = {
  list: PropTypes.object.isRequired,
};
