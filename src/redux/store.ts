import { createStore } from 'redux';
import { taskReducer } from './reducers';

export const store = createStore(taskReducer);
