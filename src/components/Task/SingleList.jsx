import {
  Button,
  Heading,
  Icon,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { AddTask, TaskList } from '..';
import { createList, updateList } from '../../store/taskActions';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { createListToastConfig } from '../../utils/toastConfig';
import PropTypes from 'prop-types';
import ModalDialog from '../ModalDialog';
import NameField from '../List/NameField';
import TypeField from '../List/TypeField';
import {
  CREATE_LIST_HEADER,
  CREATE_NEW_LIST_BUTTON_TEXT,
  EDIT_LIST_BUTTON_TEXT,
  INITIAL_STATE_TYPE,
} from '../../utils/constants';
import { FiEdit } from 'react-icons/fi';

function SingleList() {
  const toast = useToast();
  const { tasks, dispatch } = useTask();
  const { activeListId, setActiveListId } = useActiveList();
  const list = useMemo(
    () => tasks.find(({ id }) => id === activeListId),
    [tasks, activeListId]
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState('');
  const [type, setType] = useState(INITIAL_STATE_TYPE);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    if (list) {
      setName(list.name);
      setType(list.type);
      onOpen();
    }
  }, [list, onOpen]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name?.trim()) {
        setName('');
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
      }
    },
    [dispatch, name, type, resetForm, toast]
  );

  const handleEdit = useCallback(() => {
    setName(list.name);
    setType(list.type);
    onOpen();
  }, [list, onOpen]);

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name?.trim()) {
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

  return list ? (
    <>
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText={CREATE_LIST_HEADER}
        onSubmit={name ? handleUpdate : handleSubmit}
        isLoading={isLoading}
        onOpen={resetForm}
      >
        <NameField value={name} onChange={(e) => setName(e.target.value)} />
        <TypeField value={type} onChange={(e) => setType(e.target.value)} />
      </ModalDialog>
      <Heading p='5' fontWeight='extrabold' size='xl'>
        {list.name}
      </Heading>
      <Button
        onClick={handleEdit}
        mb='5'
        mr='2'
        colorScheme='gray'
        variant='outline'
        leftIcon={<Icon as={FiEdit} />}
      >
        {EDIT_LIST_BUTTON_TEXT}
      </Button>
      <Button onClick={onOpen} mb='5' colorScheme='teal'>
        {CREATE_NEW_LIST_BUTTON_TEXT}
      </Button>
      <AddTask />
      <TaskList tasks={list.tasks} />
    </>
  ) : (
    <h2>no lists yet</h2>
  );
}

SingleList.propTypes = {
  activeListId: PropTypes.string.isRequired,
};

export default SingleList;
