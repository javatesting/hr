import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Injectable()
export class Url{
    
    public url = 'http://hr.platforma.net.ua/';
    //public url = 'http://hr/';
    
    getURL(): string{
        return this.url;
    }
    

    getParameter(param: string, route: ActivatedRoute) {
        let dataParam;
        route.params.forEach(params => dataParam = params[param]);
        return dataParam;
    }
    
}