import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store.reducers';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../store/store.actions';
import { ITodo } from '../../interface/todos.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select() todos;
  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

  constructor(private _store: NgRedux<IAppState>) { }

  ngOnInit() { }

  public onSubmit() {
    this._store.dispatch({
      type: ADD_TODO,
      payload: this.model
    });
  }

  public toggleTodo(todo) {
    this._store.dispatch({
      type: TOGGLE_TODO, id: todo.id
    });
  }

  public removeTodo(todo) {
    this._store.dispatch({
      type: REMOVE_TODO, id: todo.id
    });
  }

}
