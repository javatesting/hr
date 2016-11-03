import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Person} from "../person";
import {PersonService} from "../person.service";
import {Url} from "../../../../url";
@Component({
    moduleId: module.id,
    selector: 'person-detail',
    templateUrl: 'person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

    person: Person;
    linkTo = '/person/edit/form';

    constructor(
        private activatedRoute: ActivatedRoute,
        private personservice: PersonService, private url: Url) {
    }

    ngOnInit():void {
        let id = this.url.getParameter('person_id', this.activatedRoute);
        this.personservice.getPerson(id).subscribe(data => this.person = data[0]);
    }
}