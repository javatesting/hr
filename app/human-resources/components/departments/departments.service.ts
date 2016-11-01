import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

//import 'rxjs/add/operator/toPromise';
import {Departments} from "./departments";
import {Url} from "../../../url";
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DepartmentsService {

  departments: Departments[];
  //department: Departments;
  
  constructor(public http: Http, private url: Url) { }

  // getDepartments() {
  //        this.http.get(this.url.getURL() + 'departments')
  //       .toPromise()
  //       .then(response => response.json())
  //       .then(json => json.map(d => new Departments(d.department_id, d.department_name, d.manager_id, d.location_id)))
  //       .then(data => this.departments = data)
  //       .catch(this.handleError);
  //   return  this.departments;
  // }

  getAllDepartments() {
    return this.http.get(this.url.getURL() + 'departments')
        .map(response => <Departments[]>response.json() );
        //.catch(this.handleError);
  }


  getDepartment(department_id: string) {
    return this.http
        .get(this.url.getURL() + 'department/' + department_id)
        .map(response => <Departments[]> response.json());
  }


  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}






