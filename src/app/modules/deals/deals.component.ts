import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/_http/http-service.service';
// Redux
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { DEAL_RESULTS } from '../../store/actions';
// import { IDeal } from '../../interface/deals.interface';

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

  public _offers;
  public _busy: boolean;
  public _httpStatus: any;

  pageSize=0;
  // products: Product[];
  sub;

  // constructor(private _Activatedroute:ActivatedRoute,
  //             private _router:Router,
  //             private _productService:ProductService){
  // }


  constructor(private _router: Router,
              private _activeRoute: ActivatedRoute,
              private _apiService: ApiService,
              private ngRedux: NgRedux<IAppState>) {
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
    // console.log( 'these are my extras ', extras );

    this._apiService._get('liverpool', [['pageSize=' + extras]]) // ['pageSize=150', 'brand=wowcher']
      .subscribe(
        data => {
          this._offers = data;
          this._httpStatus.status = 200;
        },
        err => {
          this._busy = false;
          this._httpStatus = err;
        },
        () => {
          this._busy = false;
          console.log('finished loading deals content!');

          this.ngRedux.dispatch({
            type: DEAL_RESULTS,
            payload: this._offers
          });
        }
      );
  }

  public goToDeal(dealId) {
    console.log('you clicked deal ', dealId);
  }

  ngOnInit() {
    // this.getDeals();

    console.log('OnInit');

    this.sub = this._activeRoute.queryParams
      .subscribe(params => {
        console.log('MY PARAMS ', params);
        this.pageSize = +params['pageSize'] || 25;
        this._offers = this.getDeals(this.pageSize);
        // console.log('Query params ', this.pageSize);
      });

    // this._offers = this.getDeals();
  }

  // nextPage() {
  //   this._router.navigate(['./'], { queryParams: { pageSize: this.pageSize + 1 }, relativeTo: this._activeRoute }   );
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
