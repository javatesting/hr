import {Component, OnInit}          from '@angular/core';
import {Router} from "@angular/router";
import {Regions} from "./regions";
import {RegionsService} from "./regions.service";

@Component({
  moduleId: module.id,
  selector: 'regions',
  templateUrl: 'regions.component.html'
})
export class RegionsComponent implements OnInit{
  subHeader = "Regions";
  regions: Regions[];
  createNewRegion = 'region/add/form';

  constructor(
      private regionsService: RegionsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.regionsService.getRegions()
        .then(regions => this.regions = regions);
  }


  showDetail(region: Regions): void {
    let id = region.region_id;
    let link = ['/region', id];
    this.router.navigate(link);
  }



  // createForm(): void {
  //   this.router.navigate(['/region/add/form']);
  // }
}










