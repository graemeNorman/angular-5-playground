import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../../services/_http/http-service.service';

@Component({
  selector: 'app-search-results-main',
  templateUrl: 'search-results.template.html',
  styleUrls: ['./search-results.style.css'],
  providers: [ ApiService ]
})

export class SearchResultsIndexComponent implements OnInit, OnDestroy {
  isParentActive: boolean;
  routerSubscription: any;

  public _offers;
  public _busy: boolean;
  public _httpStatus: any;
  public ar: any;

  constructor(private _router: Router, private _apiService: ApiService) {
    // Router Subscription:
    this.routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isParentActive = event.url === '/searchResults';
        }
    });

    // Results loading (getDeals):
    this._busy = true;
    this._httpStatus = {
      status: 200
    };
  }

  public getDeals() {
    this._apiService._get('liverpool', [['pageSize=10'], ['page=2']]) // ['pageSize=150', 'brand=wowcher']
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
          console.log('finished loading deals content!'); }
      );
  }

  ngOnInit() {
    this.getDeals();
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
