import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store.reducers';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { DealActions } from '../../store/actions/deal.actions';
import { Observable } from 'rxjs/Observable';
import {IResults} from '../../interface/results.interface';

@Component({
  selector: 'app-deals-page',
  templateUrl: './deals-page.smart-component.html',
  styleUrls: ['./deals-page.smart-component.css']
})

export class DealsPageSmartComponent implements OnInit {

  public deal_id: string;
  public dummySelect$: Observable<any>;
  todos$: Observable<IResults>;
  routerSubscription: any;
  isParentActive: boolean;
  // public moo$, counter$;

  // this selects `pathDemo.foo.bar` from the store and attaches it to this
  // property.
  // @select(['results', 'mainDeal']) pathSelection$;


  // this.currentName$ = this.ngRedux.select(state => state.dashboard.currentRobot.name);
  // @select(['results', 'deal', 'id']) woof$: Observable<number>;

  // @select(['foo','bar']) foo$: Observable<string>

  constructor(private _store: NgRedux<IAppState>,
              private _actions: DealActions,
              private _router: Router,
              private _activeRoute: ActivatedRoute) {
      // Trying to select something!!
      this.dummySelect$ = _store.select(['results', 'deals']);

      this._store.dispatch(
        this._actions.selectedDealLoaded(
          this._activeRoute.snapshot.params[ 'dealId' ]
        )
      );

    // Router Subscription:
    this.routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isParentActive = event.url.startsWith('/searchResults');
      }
    });
  }

  ngOnInit() {

    this.todos$ = this._store.select(['results']);

    // console.log('TODO -----> ', this.dummySelect$[0].headline);

    // this.counter$ = this._store.select(['results', 'mainDeal', 'id']);

    // console.log('COUNTER ---------> ', this.counter$);

    // console.log('THIS IS MY PATH SELECTION ', this.pathSelection$.id);

    // this.moo$ = this._store.select('results.mainDeal');

    // console.log('URL URL ', this.moo$.mainDeal.id );

    // this.moo$ = this._store.select(state => state.results);
    // this.moo$ = this._store.select(state => state.results);

    // console.log('This is current state ', this.moo$);

    this.deal_id = this._activeRoute.snapshot.params[ 'dealId' ];
  }

}
