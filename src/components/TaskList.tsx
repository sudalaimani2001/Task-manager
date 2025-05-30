import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchTasks } from '../redux/actions';
import TaskItem from './TaskItem';
import type { Task } from '../types/Task';
import './TaskList.scss'; // Assuming you have some styles for TaskList

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks: Task[] = useSelector((state: any) => state);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  useEffect(() => {
    try {
      setLoading(true);
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => dispatch(fetchTasks(res.data.map((t: any) => ({ id: t.id, title: t.title, completed: t.completed })))));
    } catch (error) {
      setLoading(false);
      console.error('Error fetching tasks:', error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  if (loading) {
    return <div className='loading'>Loading tasks...</div>;
  }

  return (

    <div className='filter-container'>
      <div className="filters">
        <button className='all' onClick={() => setFilter('all')}>All</button>
        <button className='pending' onClick={() => setFilter('pending')}>Pending</button>
        <button className='completed' onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <div className='task-list-container'>
        {filteredTasks.map(task => <TaskItem key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default TaskList;