import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { ActivatedRoute } from '@angular/router';
import { DEAL_SELECTED } from '../../store/actions';

@Component({
  selector: 'app-deals-page',
  templateUrl: './deals-page.smart-component.html',
  styleUrls: ['./deals-page.smart-component.css']
})
export class DealsPageSmartComponent implements OnInit {

  public deal_id: string;

  constructor(private ngRedux: NgRedux<IAppState>,
              private _activeRoute: ActivatedRoute) {
    this.ngRedux.dispatch({
      type: DEAL_SELECTED,
      payload: {
        id: this._activeRoute.snapshot.params[ 'dealId' ]
      }
    });
  }

  ngOnInit() {
    this.deal_id = this._activeRoute.snapshot.params[ 'dealId' ];
  }

}
