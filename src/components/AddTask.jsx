import { useState } from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { addTaskToast } from '../utils/toast';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';

function AddTask() {
  const { dispatch } = useTask();
  const toast = useToast();
  const [content, setContent] = useState('');
  const [statusInput, setStatusInput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!content?.trim()) {
      setStatusInput(false);
      setContent('');
      return toast(addTaskToast);
    }
    dispatch({
      type: ACTIONS.ADD,
      payload: { id: nanoid(), body: content.trim() },
    });
    setContent('');
    setStatusInput(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='4' mb='4'>
        <Input
          borderColor={!statusInput ? 'red.300' : 'transparent'}
          variant='filled'
          placeholder='add task'
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
