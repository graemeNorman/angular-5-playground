import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Obj } from '../../utils/obj';

// Constants
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application-json' })
};

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  private baseUrl = 'https://public-api.wowcher.co.uk/v1/deal';

  public _get<T>(entityName: string, parameters: any): Observable<any> {

    const urlParams = Obj.toUrlParams(parameters);

    console.log('urlParams ', urlParams);

    return this._http.get(`${this.baseUrl}/${entityName}?${urlParams}`);
  }

}
