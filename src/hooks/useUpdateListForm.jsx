import { useCallback, useState, useEffect, useMemo } from 'react';
import { useTask } from '../contexts/TaskContext';
import { useActiveList } from '../contexts/activeListContext';
import { updateToastConfig } from '../utils/toastConfig';
import { useToast } from '@chakra-ui/react';
import { updateList } from '../store/taskActions';
import { INITIAL_STATE_TYPE } from '../utils/constants';

export default function useUpdateListForm({ onClose, isOpen, onOpen, list }) {
  const toast = useToast();
  const { tasks, dispatch } = useTask();
  const { activeListId } = useActiveList();

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

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleEdit = useCallback(() => {
    setName(list.name);
    setType(list.type);
    onOpen();
  }, [list, onOpen]);

  const handleUpdate = useCallback(async () => {
    if (!name.trim()) {
      setIsNameInvalid(true);
      toast(updateToastConfig.invalidName);
      return;
    }
    setIsLoading(true);

    const updatedList = {
      ...list,
      name,
      type,
    };
    setIsLoading(true);
    try {
      await dispatch(updateList(updatedList, activeListId));
      toast(updateToastConfig.success);
    } catch (err) {
      console.error(err);
      toast(updateToastConfig.error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  }, [dispatch, list, name, onClose, toast, type]);

  return {
    isLoading,
    handleUpdate,
    handleEdit,
    name,
    setName,
    type,
    setType,
    isNameInvalid,
    setIsNameInvalid,
    resetForm,
  };
}
