import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function ModalDialog({
  isOpen,
  onClose,
  headerText = 'are you sure?',
  children,
  onSubmit,
  isLoading,
  cancelButtonText = 'cancel',
  submitButtonText = 'confirm',
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            colorScheme='gray'
            mr={3}
            onClick={onClose}
            disabled={isLoading}
          >
            {cancelButtonText}
          </Button>
          <Button colorScheme='blue' onClick={onSubmit}>
            {isLoading ? <Spinner size='sm' /> : submitButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ModalDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
