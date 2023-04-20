import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import NameField from './NameField';
import TypeField from './TypeField';

export default function NewListModal({
  isOpen,
  onClose,
  name,
  setName,
  type,
  setType,
  handleSubmit,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New List</ModalHeader>
        <ModalBody>
          <NameField value={name} onChange={(e) => setName(e.target.value)} />
          <TypeField value={type} onChange={(e) => setType(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
            Create
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
