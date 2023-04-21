import { Button, useDisclosure, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../ModalDialog';
import TextField from './TextField';
import TypeField from './TypeField';
import { CREATE_LIST_HEADER, INITIAL_STATE_TYPE } from '../../utils/constants';
import useCreateListForm from '../../hooks/useCreateListForm';

export default function CreateListForm({ children, fn }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isLoading,
    handleSubmit,
    name,
    setName,
    type,
    setType,
    isNameInvalid,
    setIsNameInvalid,
    resetForm,
    handleBlur,
  } = useCreateListForm({ onClose });

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
        headerText={CREATE_LIST_HEADER}
        onSubmit={() => handleSubmit(name, type, resetForm)}
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
      </ModalDialog>{' '}
      <Button onClick={onOpen} mb='5' colorScheme='teal'>
        Create List
      </Button>
      {children}
    </>
  );
}

CreateListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
