import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store.reducers';
import { REMOVE_ALL_TODOS } from '../../store/store.actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;

  constructor(private _store: NgRedux<IAppState>) { }



  ngOnInit() { }

  public clearTodos() {
    this._store.dispatch({
      type: REMOVE_ALL_TODOS
    });
  }

}
