import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Employee} from "./employee";
import {Url} from "../../../url";

@Injectable()
export class EmployeesService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private url: Url) { }

  // getEmployees() {
  //   return this.http.get(this.url.getURL() + 'employees')
  //              .toPromise()
  //              .then(response => response.json())
  //              .catch(this.handleError);
  // }

  getEmployees() {
    return this.http.get(this.url.getURL() + 'employees')
        .map(response => <Employee[]>response.json());
  }

  getEmployee(id) {
    return this.http.get(this.url.getURL() + 'employee' + '/' + id)
        .map(response => <Employee[]>response.json());
  }
  
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}
