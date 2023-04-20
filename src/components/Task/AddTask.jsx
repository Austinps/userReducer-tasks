import { useState, useCallback } from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { addTask } from '../../store/taskActions';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { addToastConfig } from '../../utils/toastConfig';

function AddTask() {
  const { dispatch } = useTask();
  const { activeListId } = useActiveList();
  const toast = useToast();
  const [body, setBody] = useState('');

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!body?.trim()) {
        setBody('');
        return toast(addToastConfig.invalidName);
      }
      try {
        await dispatch(addTask({ body: body.trim() }, activeListId));
        toast(addToastConfig.success);
        setBody('');
      } catch (error) {
        console.error(error);
        toast(addToastConfig.error);
      }
    },
    [activeListId, body, dispatch, toast]
  );

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='4' mb='4'>
        <Input
          isInvalid={!body?.trim()}
          variant='filled'
          placeholder='add task'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <Button
          bgGradient='linear(to-br, #228be6, #15aabf)'
          color='white'
          _hover={{ bgGradient: 'linear(to-br, #228be6, #228be6)' }}
          variant='solid'
          size='lg'
          fontWeight='bold'
          type='submit'
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
