import React from 'react'
import TaskList from '../components/TaskList'
import './TaskPage.scss'; // Assuming you have some styles for TaskPage
import TaskForm from '../components/TaskForm';

export default function TaskPage() {
  return (
    <div className="task-page">
        <h1>Task Manager</h1>
        <TaskForm/>
        <TaskList/>
    </div>
  )
}
