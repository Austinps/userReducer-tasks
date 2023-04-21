import {
  Button,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../ModalDialog';
import TextField from './List/TextField';
import TypeField from './List/TypeField';
import { CREATE_LIST_HEADER, INITIAL_STATE_TYPE } from '../../utils/constants';

function ListFormContainer({
  onSubmit,
  headerText,
  isLoading,
  initialName,
  initialType,
  handleBlur,
  isNameInvalid,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, setName, type, setType, resetForm, handleSubmit } =
    useCreateOrUpdateListForm({ onClose, initialName, initialType });

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <>
      <Button onClick={onOpen} mb='5' colorScheme='teal'>
        Create List
      </Button>
      <ModalDialog
        isOpen={isOpen}
        onClose={onClose}
        headerText={headerText}
        onSubmit={() => handleSubmit(onSubmit)}
        isLoading={isLoading}
        onOpen={() => {
          setName(initialName);
          setType(initialType);
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
      {initialName && (
        <Flex alignItems='center'>
          <Heading p='5' fontWeight='extrabold' size='xl' flex='1'>
            {initialName}
          </Heading>
          <IconButton
            icon={<FiEdit />}
            aria-label='Edit list'
            variant='outline'
            colorScheme='gray'
            onClick={onOpen}
          />
        </Flex>
      )}
    </>
  );
}

ListFormContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  initialName: PropTypes.string,
  initialType: PropTypes.string,
  handleBlur: PropTypes.func,
  isNameInvalid: PropTypes.bool,
};

export default ListFormContainer;
