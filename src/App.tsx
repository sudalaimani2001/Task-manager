import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import AppRouter from './navigation/AppRouter'

function App() {

  return (
    <div className="app">
      <AppRouter/>
    </div>
  )
}

export default App
