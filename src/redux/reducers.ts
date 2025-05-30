import type { Task } from '../types/Task';
import { FETCH_TASKS, ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

const initialState: Task[] = [];

export const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
    default:
      return state;
  }
};