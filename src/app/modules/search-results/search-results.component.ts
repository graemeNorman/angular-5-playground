import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector: 'app-search-results-main',
    templateUrl: 'search-results.template.html',
    styleUrls: ['./search-results.style.css']
})

export class SearchResultsIndexComponent implements OnInit, OnDestroy {
    buildingBlock_links: any[];
    isParentActive: boolean = true;
    routerSubscription: any;
    activeSection: any = {};
    componentsHeader = 'This is the search results page!!!!';

    constructor(private router: Router) {
      this.routerSubscription = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.isParentActive = event.url === '/searchResults';

          this.activeSection = _.find(
            _.union(
              this.buildingBlock_links
            ), {'linkTo': event.url.split('?')[0]});
        }
      });
    }

    ngOnInit() {
      // const componentsHeader = 'This is the search results page!!!!';
      // this.buildingBlock_links = [
      //   {
      //     name: 'Input(s)',
      //     linkTo: '/buildingBlocks/input-box',
      //     header: componentsHeader,
      //     code: 'BB_1'
      //   },
      //   {
      //     name: 'Text area',
      //     linkTo: '/buildingBlocks/text-area',
      //     header: componentsHeader,
      //     code: 'BB_2'
      //   },
      //   {
      //     name: 'Drop down',
      //     linkTo: '/buildingBlocks/dropdown',
      //     header: componentsHeader,
      //     code: 'BB_3'
      //   },
      //   {
      //     name: 'Radio button',
      //     linkTo: '/buildingBlocks/radio-button',
      //     header: componentsHeader,
      //     code: 'BB_4'
      //   },
      //   {
      //     name: 'Checkbox',
      //     linkTo: '/buildingBlocks/checkbox',
      //     header: componentsHeader,
      //     code: 'BB_5'
      //   },
      //   {
      //     name: 'Tabs',
      //     linkTo: '/buildingBlocks/tabs',
      //     header: componentsHeader,
      //     code: 'BB_6'
      //   },
      //   {
      //     name: 'Modal',
      //     linkTo: '/buildingBlocks/modal',
      //     header: componentsHeader,
      //     code: 'BB_7'
      //   }
      // ];

    }

    ngOnDestroy() {
      this.routerSubscription.unsubscribe();
    }
}
