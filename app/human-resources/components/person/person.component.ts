
import {OnInit, Component} from "@angular/core";
import {PersonService} from "./person.service";
import {Person} from "./person";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'person',
    templateUrl: 'person.component.html'
})
export class PersonComponent implements OnInit{

    subHeader = 'Persons';
    persons : Person[];
    createNewPerson = 'person/add/form';
    
    constructor(private personService: PersonService, private router: Router) {

    }
    
    ngOnInit(): void {
        this.personService
            .getPersons()
            .subscribe(data => this.persons = data);
    }

    showDetails(person: Person): void {
        this.router.navigate(['/person', person.person_id]);
    }
    
}