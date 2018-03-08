import { Injectable } from '@angular/core';

@Injectable()
export class DealActions {
  static RESULTS_REQUEST = 'RESULTS_REQUEST';
  static RESULTS_RESPONSE = 'RESULTS_RESPONSE';
  static DEAL_SELECTED = 'DEAL_SELECTED';
  static DEAL_LOADED = 'DEAL_LOADED';

  resultsRequest() {
    return DealActions.RESULTS_REQUEST;
  }

  resultsResponse(results) {
    return { type: DealActions.RESULTS_RESPONSE, payload: results };
  }

  dealSelect() {
    return { type: DealActions.DEAL_SELECTED };
  }

  selectedDealLoaded(id) {
    return { type: DealActions.DEAL_LOADED, payload: id };
  }

}
