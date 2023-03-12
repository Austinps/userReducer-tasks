import { useState, useEffect } from 'react';
import { Heading, VStack, useToast, useColorMode } from '@chakra-ui/react';
import { TaskList, AddTask } from './components';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    console.log('new', newTasks);
    setTasks([...newTasks]);
  }

  function deleteTaskAll() {
    setTasks([]);
  }

  function checkTask(id) {
    const newTasksCheck = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.check = !task.check;
      }
      return task;
    });

    setTasks(newTasksCheck);
  }

  function updateTask(id, body, onClose) {
    const info = body.trim();

    if (!info) {
      toast({
        title: 'Add your task',
        position: 'top',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });

      return;
    }

    const newTasksUpdate = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });

    setTasks(newTasksUpdate);

    onClose();
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <VStack p={4} minH='100vh' pb={28}>
        <Heading p='5' fontWeight='extrabold' size='xl'>
          Task List
        </Heading>
        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          deleteTaskAll={deleteTaskAll}
          checkTask={checkTask}
        />
      </VStack>
    </>
  );
}
