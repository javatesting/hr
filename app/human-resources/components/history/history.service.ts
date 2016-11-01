import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {History} from "./history";
import {Url} from "../../../url";

@Injectable()
export class HistoryService {

  constructor(private http: Http, private url: Url) { }

  getHistory(): Promise<History[]> {
    return this.http.get(this.url.getURL() + 'history')
               .toPromise()
               .then(response => response.json() as History[])
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
