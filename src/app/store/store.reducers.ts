// Actions
import { DealActions } from './actions/deal.actions';

// Interfaces
import { IDeal } from '../interface/deals.interface';
import { ISelectedDeal } from '../interface/selected-deals.interface';

export interface IAppState {
  deals: IDeal[];
  selectedDeal: ISelectedDeal;
}

export const INITIAL_STATE: IAppState = {
  deals: [],
  selectedDeal: null
};

/*
  state: previous state of the application
  action: an object describing the dispatched change
 */
export function rootReducer(state, action) {
  switch (action.type) {

    case DealActions.RESULTS_REQUEST:
      return Object.assign({}, state, {});

    case DealActions.RESULTS_RESPONSE:
      return Object.assign({}, state, {deals: action.payload});

    case DealActions.DEAL_SELECTED:
      return Object.assign({}, state, {});

    case DealActions.DEAL_LOADED:
      return Object.assign({}, state, {selectedDeal: action.payload});
  }

  return state;
}
