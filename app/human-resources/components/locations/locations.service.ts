import { Injectable }    from '@angular/core';
import {Headers, Http, Response, RequestOptions, RequestMethod} from '@angular/http';
import {Locations} from "./locations";
import 'rxjs/add/operator/toPromise';
import {Url} from "../../../url";
import {BaseService} from '../../shared/index';

@Injectable()
export class LocationsService implements BaseService{

  locations: Locations[];
  
  constructor(private http: Http, public url: Url) { }

  getAllEntity() {
     this.getLocations();
     return this.locations;
  }
  
  getEntityById(id: string) {
    return this.getLocation(id);
  }
  
  
  getLocations() {
    return this.http.get(this.url.getURL() + 'locations')
        .toPromise()
        .then(res => <Locations[]> res.json())
        .catch(this.handleError);
  }

  
  // getLocations() {
  //     this.http
  //       .get(this.url.getURL() + 'locations')
  //       .map(res => <Locations[]> res.json())
  //       .subscribe(data => this.locations = data);
  // }
  
  getLocation(id: string) {
    return this.http
        .get(this.url.getURL() + 'location' + '/' + id)
        .map(res => <Locations[]> res.json());
  }
  
  
  create(location: Locations) {
    let body = JSON.stringify(location);
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http
        .post(this.url.getURL() + 'location/add', body, options)
        .map(res => <Locations> res.json());
  }

  update(location: Locations) {
    let body = JSON.stringify(location);
    let options = new RequestOptions({method: RequestMethod.Post});
    return this.http
        .post(this.url.getURL() + 'location/update', body, options)
        .map(res => <Locations> res.json());
  }
  
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
