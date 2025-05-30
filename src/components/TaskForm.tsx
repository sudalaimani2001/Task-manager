import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import type { Task } from '../types/Task';
import './TaskForm.scss';

let nextId = 100;

const TaskForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        const newTask: Task = { id: nextId++, title, completed: false };
        dispatch(addTask(newTask));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                className='task-input'
                type="text"
                placeholder="Add new task"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;