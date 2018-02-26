import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Constants
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application-json' })
};
// const url = 'https://public-api.wowcher.co.uk/v1/deal/brighton?pageSize=550';
const baseUrl = 'https://public-api.wowcher.co.uk/v1/deal';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  getDeals() {
    return this._http.get(baseUrl);
  }

}
