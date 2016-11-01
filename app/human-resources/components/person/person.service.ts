
import {Injectable} from "@angular/core";
import {Url} from "../../../url";
import {Http} from "@angular/http";
import {Person} from "./person";

@Injectable()
export class PersonService {
    
    
    constructor(private http: Http, private url: Url) {
        
    }
    
    getPersons() {
        return this.http
            .get(this.url.getURL() + 'persons')
            .map(res => <Person[]>res.json());
    }
}