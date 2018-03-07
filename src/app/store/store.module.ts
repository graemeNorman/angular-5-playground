import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './store.reducers';

// Redux ecosystem stuff (https://github.com/evgenyrodionov/redux-logger).
import { createLogger } from 'redux-logger';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StoreModule {

  constructor(
    public _store: NgRedux<IAppState>,
    private devTools: DevToolsExtension
  ) {

    _store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [ createLogger() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}

/*
  Integrate devTools into Angular:
  https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/Integrations.md#angular
*/
