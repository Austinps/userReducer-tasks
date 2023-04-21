import { Button, useDisclosure, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { createList } from '../../store/taskActions';
import { useState, useCallback, useEffect } from 'react';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { createListToastConfig } from '../../utils/toastConfig';
import PropTypes from 'prop-types';
import ModalDialog from '../ModalDialog';
import TextField from './TextField';
import TypeField from './TypeField';
import { CREATE_LIST_HEADER, INITIAL_STATE_TYPE } from '../../utils/constants';

export default function CreateListForm({ onSubmit }) {
  const toast = useToast();
  const { dispatch } = useTask();
  const { setActiveListId } = useActiveList();
  const [name, setName] = useState('');
  const [type, setType] = useState(INITIAL_STATE_TYPE);
  const [isLoading, setIsLoading] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name?.trim()) {
        setIsNameInvalid(true);
        return toast(createListToastConfig.invalidName);
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
        onClose();
      }
    },
    [onSubmit, name, type, onClose, toast]
  );

  return (
    <>
      <Button onClick={onOpen} mb='5' colorScheme='teal'>
        Create New List
      </Button>
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText={CREATE_LIST_HEADER}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onOpen={() => {
          setName('');
          setType(INITIAL_STATE_TYPE);
        }}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          isInvalid={isNameInvalid}
        />
        <TypeField value={type} onChange={(e) => setType(e.target.value)} />
      </ModalDialog>
    </>
  );
}

CreateListForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
