import { Button, useToast } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { updateList } from '../../store/taskActions';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { updateListToastConfig } from '../../utils/toastConfig';
import ModalDialog from '../ModalDialog';
import TextField from './TextField';
import TypeField from './TypeField';
import { CREATE_LIST_HEADER } from '../../utils/constants';

export default function UpdateListForm({ onClose }) {
  const toast = useToast();
  const { tasks, dispatch } = useTask();
  const { activeListId } = useActiveList();
  const list = tasks.find(({ id }) => id === activeListId);

  const [name, setName] = useState(list.name);
  const [type, setType] = useState(list.type);
  const [isLoading, setIsLoading] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const handleBlur = useCallback(() => {
    setIsNameInvalid(!name?.trim());
  }, [name]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name?.trim()) {
        setIsNameInvalid(true);
        return toast(updateListToastConfig.invalidName);
      }
      const updatedList = {
        ...list,
        name,
        type,
      };
      setIsLoading(true);
      try {
        await dispatch(updateList(updatedList, activeListId));
        toast(updateListToastConfig.success);
      } catch (err) {
        console.error(err);
        toast(updateListToastConfig.error);
      } finally {
        setIsLoading(false);
        onClose();
      }
    },
    [dispatch, list, name, onClose, toast, type]
  );

  return <h1>dfgd</h1>;
}
