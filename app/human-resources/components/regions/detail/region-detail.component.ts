import {Component, OnInit}          from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Regions} from "../regions";
import {RegionsService} from "../regions.service";
import {Url} from "../../../../url";

@Component({
  moduleId: module.id,
  selector: 'region-detail',
  templateUrl: 'region-detail.component.html'
})
export class RegionDetailComponent implements OnInit{
  subHeader = "Region Detail";
  region: Regions;
  linkTo = '/region/edit/form';
    
  constructor(
      private regionService: RegionsService,
      private route: ActivatedRoute,
      private url: Url) {
     
  }

    ngOnInit(): void {
        let id = this.url.getParameter('region_id',this.route);
        this.regionService
            .getRegion(id)
            .subscribe(regions => this.region = regions[0]);
    }
    

}
