import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../ModalDialog';
import TextField from './TextField';
import TypeField from './TypeField';
import { INITIAL_STATE_TYPE, UPDATE_LIST_HEADER } from '../../utils/constants';
import useUpdateListForm from '../../hooks/useUpdateListForm';
import ListHeader from '../ListHeader';

export default function UpdateListForm({ list }) {
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
      <ListHeader list={list} action={handleEdit} />
    </>
  );
}

UpdateListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
