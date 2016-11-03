

import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {PersonService} from "../person.service";
import {Person} from "../person";
import {Router, ActivatedRoute} from "@angular/router";
import {Url} from "../../../../url";
import {Http} from "@angular/http";
@Component({
    moduleId: module.id,
    selector: 'person-form',
    templateUrl: 'person-form.component.html'
})
export class PersonFormComponent implements OnInit{

    registerForm: FormGroup;
    person: Person;
    isCreate: boolean;
    isUpdate: boolean;
    
    constructor (
                 private personService: PersonService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute,
                 private url: Url,
                 private http: Http){
        
    }
    
    ngOnInit(): void {
        this.initForm();
        this.createOrUpdateFormInit();

    }
    
    initForm(): void {
        this.registerForm = new FormGroup({
            name: new FormControl(),
            last_name: new FormControl(),
            age: new FormControl()
        });
    }

    create(): void {
        this.personService
            .create(this.person)
            .subscribe(data => console.log(data));
        this.refresh();
    }

    update(): void {
        this.personService
            .update(this.person)
            .subscribe(data => console.log(data));
        this.refresh();
    }
    
    private refresh(): void {
        this.http
            .get(this.url.getURL() + 'persons')
            .map(res => <Person[]> res.json())
            .subscribe(data => console.log(data));
        this.router.navigate(['/persons']);
    }


    private createOrUpdateFormInit(): void {
        let id = this.url.getParameter('id', this.activatedRoute);
        if(id === undefined || id === null) {
            this.person = new Person();
            this.isCreate = true;
        } else {
            this.isUpdate = true;
            this.personService.getPerson(id).subscribe(data => this.person = data[0]);
        }
    }
}