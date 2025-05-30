import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import type { Task } from '../types/Task';
import './TaskItem.scss'; // Assuming you have some styles for TaskItem

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h2>Task {task.id}</h2>
      <p>{task.title}</p>

      <div className='button-container'>
        <button className='edit' onClick={() => dispatch(toggleTask(task.id))}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className='delete' onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      </div>
    </div>
  );
};


export default TaskItem;