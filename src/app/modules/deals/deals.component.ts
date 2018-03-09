// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

// Services
import { ApiService } from '../../services/_http/http-service.service';

// Redux
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store.reducers';
import { DealActions } from '../../store/actions/deal.actions';

// RXJS
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-search-results-main',
  templateUrl: 'deals.template.html',
  styleUrls: ['./deals.style.css'],
  providers: [ ApiService ]
})

export class SearchResultsIndexComponent implements OnInit, OnDestroy {
  isParentActive: boolean;
  routerSubscription: any;
  queryParamSubscription: any;

  public _offers;
  public _busy: boolean;
  public _httpStatus: any;

  public pageSize = 0;

  constructor(private _router: Router,
              private _actions: DealActions,
              private _activeRoute: ActivatedRoute,
              private _apiService: ApiService,
              private _store: NgRedux<IAppState>) {
    // Router Subscription:
    this.routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isParentActive = event.url.startsWith('/searchResults');
        }
    });

    // Results loading (getDeals):
    this._busy = true;
    this._httpStatus = {
      status: 200
    };
  }

  public getDeals(extras) {
    this._apiService._get('liverpool', [['pageSize=' + extras]]) // ['pageSize=150', 'brand=wowcher']
      .subscribe(
        data => { this._offers = data; this._httpStatus.status = 200; },
        err => { this._busy = false; this._httpStatus = err; },
        () => { this._busy = false; this._store.dispatch(this._actions.resultsResponse(this._offers)); }
      );
  }

  public goToDeal() {
    this._store.dispatch(this._actions.dealSelect());
  }

  ngOnInit() {

    this.queryParamSubscription = this._activeRoute.queryParams
      .subscribe(params => {
        this.pageSize = +params['pageSize'] || 25;
        this._offers = this.getDeals(this.pageSize);
      });

  }

  // nextPage() {
  //   this._router.navigate(['./'], { queryParams: { pageSize: this.pageSize + 1 }, relativeTo: this._activeRoute }   );
  // }

  ngOnDestroy() {
    this.queryParamSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
