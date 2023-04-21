import { Button, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

import ModalDialog from '../Modal/ModalDialog';
import TextField from '../Modal/TextField';
import TypeField from '../Modal/TypeField';
import { CREATE_LIST_HEADER, INITIAL_STATE_TYPE } from '../../utils/constants';
import useCreateListForm from '../../hooks/useCreateListForm';
import '../../style/date-picker.css';
import SubmitButton from '../SubmitButton';

export default function CreateListForm({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isLoading,
    handleSubmit,
    name,
    setName,
    type,
    setType,
    isNameInvalid,
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
        />{' '}
        <TypeField value={type} onChange={(e) => setType(e.target.value)} />
        <SubmitButton text='+' isLoading={isLoading} />
      </ModalDialog>{' '}
      <Button onClick={onOpen} colorScheme='blue'>
        Create List
      </Button>
      {children}
    </>
  );
}
