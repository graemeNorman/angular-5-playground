import { ITodo } from '../interface/todos.interface';
import { IDeal } from '../interface/deals.interface';
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, DEAL_RESULTS} from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
  deals: IDeal[];
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null,
  deals: []
}

/*
  state: previous state of the application
  action: an object describing the dispatched change
 */
export function rootReducer(state, action) {

  switch (action.type) {
    case ADD_TODO:
      action.payload.id = state.todos.length + 1;
      return Object.assign({}, state, {
        todos: state.todos.concat(Object.assign({}, action.payload)),
        lastUpdate: new Date()
      })

    case TOGGLE_TODO:
      const payload = state.todos.find(t => t.id === action.id);
      const index = state.todos.indexOf(payload);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, payload, {isCompleted: !payload.isCompleted}),
          ...state.todos.slice(index + 1)
        ],
        lastUpdate: new Date()
      })

    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      })

    case REMOVE_ALL_TODOS:
      return Object.assign({}, state, {
        todos: [],
        lastUpdate: new Date()
      })

    case DEAL_RESULTS:
      console.log('PAYLOAD PAYLOAD PAYLOAD ', action.payload);
      return Object.assign({}, state, {
        deals: action.payload.deals
      });

  }
  return state;

}
