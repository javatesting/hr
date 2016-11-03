import {Component, OnInit}          from '@angular/core';
import {Router} from "@angular/router";
import {Countries} from "./countries";
import {CountriesService} from "./countries.service";

@Component({
  moduleId: module.id,
  selector: 'countries',
  templateUrl: 'countries.component.html'
})
export class CountriesComponent{
  subHeader = "Countries";
  countries: Countries[];
  createNewCountrie = 'countrie/add/form';
  constructor(
      private countriesService: CountriesService, private router: Router) {
    this.getCountries();
  }

  getCountries(): void {
    this.countriesService
        .getCountries()
        .then(countries => this.countries = countries);
  }

   showDetails(country: Countries){
     let link = ['/country', country.country_id];
     this.router.navigate(link);
   }
}
