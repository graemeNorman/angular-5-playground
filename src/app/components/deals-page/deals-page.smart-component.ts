import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store.reducers';
import { ActivatedRoute } from '@angular/router';
import { DealActions } from '../../store/actions/deal.actions';

@Component({
  selector: 'app-deals-page',
  templateUrl: './deals-page.smart-component.html',
  styleUrls: ['./deals-page.smart-component.css']
})

export class DealsPageSmartComponent implements OnInit {

  public deal_id: string;

  constructor(private _store: NgRedux<IAppState>,
              private _actions: DealActions,
              private _activeRoute: ActivatedRoute) {
      this._store.dispatch(
        this._actions.selectedDealLoaded(
          this._activeRoute.snapshot.params[ 'dealId' ]
        )
      );
  }

  ngOnInit() {
    this.deal_id = this._activeRoute.snapshot.params[ 'dealId' ];
  }

}
