import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useTask } from '../../contexts/TaskContext';
import { useActiveList } from '../../contexts/activeListContext';
import SingleList from './SingleList';

jest.mock('../../contexts/TaskContext');
jest.mock('../../contexts/activeListContext');

describe('SingleList', () => {
  const tasks = [
    {
      id: 'list-1',
      name: 'List 1',
      type: 'shopping',
      tasks: [
        {
          id: 'task-1',
          name: 'Buy milk',
          completed: false,
        },
        {
          id: 'task-2',
          name: 'Buy eggs',
          completed: true,
        },
      ],
    },
  ];

  const setActiveListId = jest.fn();

  beforeEach(() => {
    useTask.mockReturnValue({
      tasks,
      dispatch: jest.fn(),
    });

    useActiveList.mockReturnValue({
      activeListId: 'list-1',
      setActiveListId,
    });
  });

  it('renders the list name and create list button', () => {
    render(<SingleList activeListId='list-1' />);

    expect(screen.getByText('List 1')).toBeInTheDocument();
    expect(screen.getByText('Create New List')).toBeInTheDocument();
  });

  it('opens the create list modal when the button is clicked', () => {
    render(<SingleList activeListId='list-1' />);

    fireEvent.click(screen.getByText('Create New List'));

    expect(screen.getByText('Create List')).toBeInTheDocument();
  });

  it('submits the form and creates a new list', async () => {
    render(<SingleList activeListId='list-1' />);

    fireEvent.click(screen.getByText('Create New List'));

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'New List' },
    });

    fireEvent.change(screen.getByLabelText('Type'), {
      target: { value: 'work' },
    });

    fireEvent.submit(screen.getByRole('button', { name: 'Create List' }));

    expect(setActiveListId).toHaveBeenCalledWith('new-id');
  });
});
