import { useState, useCallback } from 'react';
import { Button, HStack, Input, Spinner, useToast } from '@chakra-ui/react';
import { addTask } from '../../store/taskActions';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import { addToastConfig } from '../../utils/toastConfig';
import TextField from '../List/TextField';
import SubmitButton from '../SubmitButton';

function AddTask() {
  const { dispatch } = useTask();
  const { activeListId } = useActiveList();
  const toast = useToast();
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const handleBlur = useCallback(() => {
    setIsNameInvalid(!body?.trim());
  }, [body]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!body?.trim()) {
        setBody('');
        return toast(addToastConfig.invalidName);
      }
      setIsLoading(true);
      try {
        await dispatch(addTask({ body: body.trim() }, activeListId));
        toast(addToastConfig.success);
        setBody('');
      } catch (error) {
        console.error(error);
        toast(addToastConfig.error);
      } finally {
        setIsNameInvalid(false);
        setIsLoading(false);
      }
    },
    [activeListId, body, dispatch, toast]
  );

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='4' mb='4'>
        <TextField
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onBlur={handleBlur}
          isInvalid={isNameInvalid}
          headerText='New task'
        />
        <SubmitButton text='Add' isLoading={isLoading} />
      </HStack>
    </form>
  );
}

export default AddTask;
