
import {Injectable} from "@angular/core";
import {Url} from "../../../url";
import {Http, RequestOptions, RequestMethod} from "@angular/http";
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

    getPerson(id: string) {
        return this.http
            .get(this.url.getURL() + 'person' + '/' + id)
            .map(res => <Person[]> res.json());
    }


    create(person: Person) {
        let body = JSON.stringify(person);
        let options = new RequestOptions({method: RequestMethod.Post});
        return this.http
            .post(this.url.getURL() + 'person/add', body, options)
            .map(res => <Person> res.json());
    }

    update(person: Person) {
        let body = JSON.stringify(person);
        let options = new RequestOptions({method: RequestMethod.Post});
        return this.http
            .post(this.url.getURL() + 'person/update', body, options)
            .map(res => <Person> res.json());
    }
}