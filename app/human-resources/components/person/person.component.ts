
import {OnInit, Component} from "@angular/core";
import {PersonService} from "./person.service";
import {Person} from "./person";

@Component({
    moduleId: module.id,
    selector: 'person',
    templateUrl: 'person.component.html'
})
export class PersonComponent implements OnInit{

    subHeader = 'Persons';
    persons : Person[];
    createNewPerson = 'person/add/form';
    
    constructor(private personService: PersonService) {}
    
    ngOnInit(): void {
        this.personService
            .getPersons()
            .subscribe(data => this.persons = data);
    }
    
    
}