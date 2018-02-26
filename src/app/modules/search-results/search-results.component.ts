import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-search-results-main',
    templateUrl: 'search-results.template.html',
    styleUrls: ['./search-results.style.css']
})

export class SearchResultsIndexComponent implements OnDestroy {
    isParentActive: boolean;
    routerSubscription: any;
    componentsHeader = 'This is the search results page!!!!';

    constructor(private router: Router) {
      this.routerSubscription = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.isParentActive = event.url === '/searchResults';
          }
      });
    }

    ngOnDestroy() {
      this.routerSubscription.unsubscribe();
    }
}
