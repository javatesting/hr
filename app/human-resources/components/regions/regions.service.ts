import { Injectable }    from '@angular/core';
import {Headers, Http, Response, RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Regions} from "./regions";
import {Url} from "../../../url";
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RegionsService {
  debug = '?XDEBUG_SESSION_START=15603';

  constructor(private http: Http, public url: Url) {
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Access-Control-Allow-Origin', '*');
    // this.headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8' );
  }
  
  
  getRegions() {
    return this.http.get(this.url.getURL() + 'regions')
        .toPromise()
        .then(res => <Regions[]> res.json())
        .catch(this.handleError);
  }


  getRegion(id: string) {
    return this.http
        .get(this.url.getURL() + 'region' + '/' + id)
        .map(res => <Regions[]> res.json());
  }

  create(region: Regions) {
    let body = JSON.stringify(region);
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http
        .post(this.url.getURL() + 'region/add' + this.debug, body, options)
        .map(res => <Regions> res.json());
  }

  update(region: Regions) {
    let body = JSON.stringify(region);
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http
        .post(this.url.getURL() + 'region/update' + this.debug, body, options)
        .map(res => <Regions> res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
