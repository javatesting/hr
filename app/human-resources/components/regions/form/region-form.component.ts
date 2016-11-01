import {Component, OnInit}          from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Regions} from "../regions";
import {RegionsService} from "../regions.service";
import {Url} from "../../../../url";
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'region-form',
    templateUrl: 'region-form.component.html'
})
export class RegionFormComponent implements OnInit{
    subHeader = "Region Form ";
    region: Regions;
    isCreate: boolean;
    isUpdate: boolean;
    
    constructor(
        private regionService: RegionsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private url: Url,
        private http: Http) {

    }

    ngOnInit(): void {
        console.log('Region Form');
        this.createOrUpdateFormInit();
    }

    create(): void {
        this.regionService
            .create(this.region)
            .subscribe(data => console.log(data));
        this.refresh();
    }

    update(): void {
        this.regionService
            .update(this.region)
            .subscribe(data => console.log(data));
        this.refresh();
    }


    private refresh(): void {
        this.http
            .get(this.url.getURL() + 'regions')
            .map(res => <Regions[]> res.json())
            .subscribe(data => console.log(data));
        this.router.navigate(['/regions']);
    }


    private createOrUpdateFormInit(): void {
        let id = this.url.getParameter('id', this.activatedRoute);
        if(id === undefined || id === null) {
            this.region = new Regions();
            this.isCreate = true;
        } else {
            this.isUpdate = true;
            this.regionService
                .getRegion(id)
                .subscribe(data => this.region = data[0]);
        }
    }

}
