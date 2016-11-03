

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Countries} from "../countries";
import {Http} from "@angular/http";
import {Url} from "../../../../url";
import {Router, ActivatedRoute} from "@angular/router";
import {CountriesService} from "../countries.service";
@Component({
    moduleId: module.id,
    selector: 'countrie-form',
    templateUrl: 'countrie-form.component.html'
})
export class CountrieFormComponent implements OnInit{

    registerForm: FormGroup;
    countrie: Countries;
    isCreate: boolean;
    isUpdate: boolean;

    constructor(
        private countriesService: CountriesService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private url: Url,
        private http: Http,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.createOrUpdateFormInit();
    }

    initForm(): void {
        this.registerForm = this.formBuilder.group({
            country_id: '',
            country_name: '',
            region_id: ''
        });
    }

    initEntity(countrie: Countries): void {
        this.countrie.country_name = countrie.country_name;
        this.countrie.region_id = countrie.region_id;
    }


    save(countrie: Countries): void {
        this.initEntity(countrie);
    }

    create(): void {
        this.countriesService
            .create(this.countrie)
            .subscribe(data => console.log(data));
        this.refresh();
    }

    update(): void {
        this.countriesService
            .update(this.countrie)
            .subscribe(data => console.log(data));
        this.refresh();
    }

    private refresh(): void {
        this.http
            .get(this.url.getURL() + 'countries')
            .map(res => <Countries[]> res.json())
            .subscribe(data => console.log(data));
        this.router.navigate(['/countries']);
    }


    private createOrUpdateFormInit(): void {
        let id = this.url.getParameter('id', this.activatedRoute);
        if(id === undefined || id === null) {
            this.countrie = new Countries();
            this.isCreate = true;
        } else {
            this.isUpdate = true;
            this.countriesService
                .getCountrie(id)
                .subscribe(data => this.countrie = data[0]);
        }
    }

}








