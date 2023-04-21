import {
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { AddTask, TaskList } from '..';
import { updateList } from '../../store/taskActions';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import PropTypes from 'prop-types';
import ModalDialog from '../ModalDialog';
import TextField from '../List/TextField';
import TypeField from '../List/TypeField';
import { UPDATE_LIST_HEADER, INITIAL_STATE_TYPE } from '../../utils/constants';
import { FiEdit } from 'react-icons/fi';
import CreateListForm from '../List/CreateListForm';

function SingleList() {
  const toast = useToast();
  const { tasks, dispatch } = useTask();
  const { activeListId } = useActiveList();

  const list = useMemo(
    () => tasks.find(({ id }) => id === activeListId),
    [tasks, activeListId]
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [type, setType] = useState(INITIAL_STATE_TYPE);
  const [isLoading, setIsLoading] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);

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

  const handleBlur = useCallback(() => {
    setIsNameInvalid(!name?.trim());
  }, [name]);

  const handleEdit = useCallback(() => {
    setName(list.name);
    setType(list.type);
    onOpen();
  }, [list, onOpen]);

  const handleUpdate = useCallback(async () => {
    if (!name.trim()) {
      setIsNameInvalid(true);
      toast(updateListToastConfig.invalidName);
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
      toast(updateListToastConfig.success);
    } catch (err) {
      console.error(err);
      toast(updateListToastConfig.error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  }, [dispatch, list, name, onClose, toast, type]);

  return list ? (
    <>
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText={UPDATE_LIST_HEADER}
        onSubmit={handleUpdate}
        isLoading={isLoading}
        onOpen={resetForm}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          isInvalid={isNameInvalid}
        />
        <TypeField value={type} onChange={(e) => setType(e.target.value)} />
      </ModalDialog>
      <Flex alignItems='center'>
        <Heading p='5' fontWeight='extrabold' size='xl' flex='1'>
          {list.name}
        </Heading>
        <IconButton
          icon={<FiEdit />}
          aria-label='Edit list'
          variant='outline'
          colorScheme='gray'
          onClick={handleEdit}
        />
      </Flex>
      <CreateListForm />
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
