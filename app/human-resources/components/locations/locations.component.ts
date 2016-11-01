import {Component, OnInit}          from '@angular/core';
import {Router} from "@angular/router";
import {Locations} from "./locations";
import {LocationsService} from "./locations.service";

@Component({
  moduleId: module.id,
  selector: 'locations',
  templateUrl: 'locations.component.html'
})
export class LocationsComponent{
  subHeader = "Locations";
  locations: Locations[];
  createNewLocation = 'location/add/form';
  
  constructor(
      private locationsService: LocationsService, private router: Router) {
      this.getLocations();
  }

  getLocations(): void {
    this.locationsService.getLocations()
        .then(locations => this.locations = locations);
  }

  showDetails(location: Locations): void {
    this.router.navigate(['/location', location.location_id]);
  }
}
