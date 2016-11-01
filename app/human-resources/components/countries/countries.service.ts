import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

import {Countries} from "./countries";
import {Url} from "../../../url";

@Injectable()
export class CountriesService {

  constructor(private http: Http, private url: Url) { }

  getCountries(): Promise<Countries[]> {
    return this.http.get(this.url.getURL() + 'countries')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }


  getCountrie(id: string) {
    return this.http
        .get(this.url.getURL() + 'countrie' + '/' + id)
        .map(res => <Countries[]> res.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
