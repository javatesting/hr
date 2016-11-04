import {Component, OnInit}          from '@angular/core';
import {Router} from "@angular/router";
import {Locations} from "./locations";
import {LocationsService} from "./locations.service";
import {BaseService} from "../../shared/index";

@Component({
  moduleId: module.id,
  selector: 'locations',
  templateUrl: 'locations.component.html'
})
export class LocationsComponent implements OnInit {
  subHeader = "Locations";
  locations: Locations[];
  createNewLocation = 'location/add/form';
  service: BaseService;

  constructor(
      private locationsService: LocationsService, private router: Router) {
      this.getLocations();
      this.service = locationsService;

  }

  ngOnInit(): void {
   // this.locations = this.service.getAllEntity();
  }

  getLocations(): void {
    this.locationsService.getLocations()
        .then(locations => this.locations = locations);
  }

  showDetails(location: Locations): void {
    this.router.navigate(['/location', location.location_id]);
  }
}
