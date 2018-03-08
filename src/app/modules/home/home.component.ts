import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Redux
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store.reducers';
import { DealActions } from '../../store/actions/deal.actions';

@Component({
    selector: 'app-intro-home',
    templateUrl: 'home.template.html',
    styleUrls: ['./home.style.css']
})

export class IntroComponent implements OnInit {

  intro: any;

  constructor(private _router: Router,
              private _actions: DealActions,
              private _store: NgRedux<IAppState>) { }

  ngOnInit() {
    this.intro = {
      heading: 'Deals App',
      contents: [
        'HttpClient',
        'Observables',
        'Reactive forms',
        'SASS / Bootstrap 4',
        'Redux data store',
      ]
    };
  }

  public showResults() {
    this._store.dispatch({ type: this._actions.resultsRequest() });
    this._router.navigate(['/searchResults'], { queryParams: { pageSize: 25 } });
  }

}
