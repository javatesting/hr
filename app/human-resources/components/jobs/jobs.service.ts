import { Injectable }    from '@angular/core';
import {Headers, Http, Response, RequestOptions, RequestMethod} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import {Jobs} from "./jobs";
import {Url} from "../../../url";

@Injectable()
export class JobsService {

  constructor(private http: Http, private url: Url) { }

  getJobs(): Promise<Jobs[]> {
    return this.http.get(this.url.getURL() + 'jobs')
               .toPromise()
               .then(response => response.json() as Jobs[])
               .catch(this.handleError);
  }



  getJob(id: string) {
    return this.http
        .get(this.url.getURL() + 'job' + '/' + id)
        .map(res => <Jobs[]> res.json());
  }

  create(job: Jobs) {
    let body = JSON.stringify(job);
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http
        .post(this.url.getURL() + 'job/add', body, options)
        .map(res => <Jobs> res.json());
  }

  update(job: Jobs) {
    let body = JSON.stringify(job);
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http
        .post(this.url.getURL() + 'job/update', body, options)
        .map(res => <Jobs> res.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
