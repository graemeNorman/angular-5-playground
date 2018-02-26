import {Component, OnDestroy, OnInit } from '@angular/core';
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
  componentsHeader = 'This is the search results page!!!!';
  public _offers;
  public _busy: boolean;
  public _httpStatus: number;

  constructor(private _router: Router, private _apiService: ApiService) {
    // Router Subscription:
    this.routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isParentActive = event.url === '/searchResults';
        }
    });

    // Results loading (getDeals):
    this._busy = true;
  }

  public getDeals() {
    this._apiService.getDeals().subscribe(
      data => { this._offers = data; this._httpStatus = 200; },
      err => { this._busy = false; this._httpStatus = err.status; },
      () => {
        console.log( this._offers.deals[2].images, 'loading deals complete' ),
          this._busy = false;
      }
    );
  }

  ngOnInit() {
    this.getDeals();
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
