import { ITodo } from '../interface/todos.interface';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
}

/*
  state: previous state of the application
  action: an object describing the dispatched change
 */
export function rootReducer(state, action) {
  return state;
}
