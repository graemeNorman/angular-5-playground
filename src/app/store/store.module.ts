import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './store';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StoreModule {

  constructor(
    ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension
  ) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );
  }
}

/*
  Integrate devTools into Angular:
  https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/Integrations.md#angular
*/
