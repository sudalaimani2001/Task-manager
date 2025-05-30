import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import TaskPage from '../pages/TaskPage'

export default function AppRouter() {
  return (
    <Routes>
        <Route path= "/" element={<TaskPage/>} />
        <Route path= "/task:id" element={<h1>About Page</h1>} />
    </Routes>
  )
}
