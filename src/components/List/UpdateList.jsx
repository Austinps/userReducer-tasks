import { useEffect } from 'react';
import { useDisclosure, IconButton } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import ModalDialog from '../Modal/ModalDialog';
import TextField from '../Modal/TextField';
import TypeField from '../Modal/TypeField';
import useUpdateListForm from '../../hooks/useUpdateListForm';
import { INITIAL_STATE_TYPE, UPDATE_LIST_HEADER } from '../../utils/constants';

export default function UpdateList({ list }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isLoading,
    handleUpdate,
    handleEdit,
    name,
    setName,
    type,
    setType,
    isNameInvalid,
    resetForm,
    handleBlur,
  } = useUpdateListForm({ onClose, isOpen, onOpen, list });

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <>
      <IconButton icon={<FiEdit />} isRound onClick={handleEdit} />
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText={UPDATE_LIST_HEADER}
        onSubmit={() => handleUpdate(name, type, resetForm)}
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
