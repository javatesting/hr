import {Component, OnInit}          from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {Url} from "../../../../url";
import {CountriesService} from "../countries.service";
import {Countries} from "../countries";
import 'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'countrie-detail',
  templateUrl: 'countrie-detail.component.html'
})
export class CountrieDetailComponent implements OnInit{
  subHeader = "Countrie Details";
  countries: Countries[];
  countrie: Countries;
  linkTo = 'countrie/edit/form';
  
  constructor(
      private countrieService: CountriesService,
      private activatedRoute: ActivatedRoute,
      private url: Url) {
  }

  ngOnInit(): void {
    this.displayCountrie();
  }

  displayCountrie() {
    let id = this.url.getParameter('country_id', this.activatedRoute);
    this.countrieService
        .getCountrie(id)
        .subscribe(data => this.countrie  = data[0]);

  }
}
