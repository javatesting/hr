import {OnInit, Component} from "@angular/core";
import {LocationsService} from "../locations.service";
import {Locations} from "../locations";
import {Router, ActivatedRoute} from "@angular/router";
import {Url} from "../../../../url";
import {Http} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'location-form',
    templateUrl: 'location-form.component.html'
})
export class LocationFormComponent implements OnInit{
    subHeader = "Location Form";
    location: Locations;
    isCreate: boolean;
    isUpdate: boolean;
    
    constructor(
        private locationsService: LocationsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private url: Url,
        private http: Http
    ) { 
        
    }
    
    ngOnInit(): void {
        console.log('Location Form');
        this.createOrUpdateFormInit();
    }
    
    create(): void {
        this.locationsService
            .create(this.location)
            .subscribe(data => console.log(data));
        this.refresh();
    }

    update(): void {
        this.locationsService
            .update(this.location)
            .subscribe(data => console.log(data));
        this.refresh();
    }


    private refresh(): void {
        this.http
            .get(this.url.getURL() + 'locations')
            .map(res => <Locations[]> res.json())
            .subscribe(data => console.log(data));
            this.router.navigate(['/locations']);
    }


    private createOrUpdateFormInit(): void {
        let id = this.url.getParameter('id', this.activatedRoute);
        if(id === undefined || id === null) {
            this.location = new Locations();
            this.isCreate = true;
        } else {
            this.isUpdate = true;
            this.locationsService
                .getLocation(id)
                .subscribe(data => this.location = data[0]);
        }
    }

}