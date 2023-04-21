import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useTask } from '../contexts/TaskContext';
import { useActiveList } from '../contexts/activeListContext';
import { createListToastConfig } from '../utils/toastConfig';
import { createList } from '../store/taskActions';
import { INITIAL_STATE_TYPE } from '../utils/constants';

export default function useCreateListForm({ onClose }) {
  const toast = useToast();
  const { dispatch } = useTask();
  const { setActiveListId } = useActiveList();
  const [name, setName] = useState('');
  const [type, setType] = useState(INITIAL_STATE_TYPE);
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBlur = useCallback(() => {
    setIsNameInvalid(!name?.trim());
  }, [name]);

  const resetForm = useCallback(() => {
    setName('');
    setType(INITIAL_STATE_TYPE);
    onClose();
  }, [onClose]);

  const handleSubmit = useCallback(
    async (name, type, resetForm) => {
      if (!name?.trim()) {
        toast(createListToastConfig.invalidName);
        return;
      }

      const newId = nanoid();
      const newList = {
        id: newId,
        name,
        type,
      };

      setIsLoading(true);
      try {
        await dispatch(createList(newList));
        setActiveListId(newId);
        resetForm();
        toast(createListToastConfig.success);
      } catch (err) {
        console.error(err);
        toast(createListToastConfig.error);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, setActiveListId, toast, resetForm, createList]
  );

  return {
    isLoading,
    handleSubmit,
    name,
    setName,
    type,
    setType,
    isNameInvalid,
    resetForm,
    handleBlur,
  };
}
