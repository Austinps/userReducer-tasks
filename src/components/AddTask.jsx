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
        <Button colorScheme='blue' px='8' pl='10' pr='10' h='46' type='submit'>
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
