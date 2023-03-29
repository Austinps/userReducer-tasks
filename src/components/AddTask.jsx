import { useState } from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { addTaskToast } from '../utils/toast';
import { useTask } from '../contexts/TaskContext';
import { ACTIONS } from '../contexts/TaskReducer';

function AddTask() {
  const { tasks, dispatch } = useTask();
  const toast = useToast();
  const [content, setContent] = useState('');
  const [statusInput, setStatusInput] = useState(true);

  function addTask(content) {
    if (!content) {
      toast(addTaskToast);
      setStatusInput(false);
      return setContent('');
    }
    dispatch({
      type: ACTIONS.ADD,
      payload: { id: nanoid(), body: content.trim() },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(content);
    setContent('');
  }

  if (content && !statusInput) {
    setStatusInput(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='4' mb='4'>
        <Input
          h='46'
          borderColor={!statusInput ? 'red.300' : 'transparent'}
          variant='filled'
          placeholder='add task'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          h={12}
          px={6}
          bgGradient='linear(to-br, #228be6, #15aabf)'
          color='white'
          _hover={{ bgGradient: 'linear(to-br, #228be6, #228be6)' }}
          variant='solid'
          size='lg'
          rounded='md'
          fontWeight='bold'
          mb={{ base: 2, sm: 0 }}
          type='submit'
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
