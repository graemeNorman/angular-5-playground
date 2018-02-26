import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/_http/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ApiService ]
})
export class AppComponent implements OnInit {

  public _offers;
  private _busy: boolean;
  constructor(private _apiService: ApiService) {
    this._busy = true;
  }

  public getDeals() {
    this._apiService.getDeals().subscribe(
      data => { this._offers = data; },
      err => console.error(err),
      () => {
        console.log( this._offers.deals[2].images, 'deals loading complete' ),
        this._busy = false;
      }
    );

  }

  ngOnInit() {
    this.getDeals();
  }

}
