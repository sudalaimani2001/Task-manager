import type { Task } from "../types/Task";

export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const fetchTasks = (tasks: Task[]) => ({ type: FETCH_TASKS, payload: tasks });
export const addTask = (task: Task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id: number) => ({ type: DELETE_TASK, payload: id });
export const toggleTask = (id: number) => ({ type: TOGGLE_TASK, payload: id });
