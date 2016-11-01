
import {Component, OnInit} from "@angular/core";
import {Locations} from "../locations";
import {LocationsService} from "../locations.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Url} from "../../../../url";
import { Location }               from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'location-detail',
    templateUrl: 'location-detail.component.html'
})    

export class LocationDetailComponent implements OnInit{
    subHeader = "Location Details";
    location: Locations;

    linkTo = '/location/edit/form';
    constructor(
                private locationsService: LocationsService,
                private activatedRoute: ActivatedRoute,
                private url: Url,
                private router: Router, 
                private locationBack: Location) {
        
    }
    
    ngOnInit(): void {
        let id = this.url.getParameter('location_id', this.activatedRoute);
        this.locationsService
            .getLocation(id)
            .subscribe(data => this.location = data[0]);
    }

}
