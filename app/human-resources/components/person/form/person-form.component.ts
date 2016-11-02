

import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: 'person-form',
    templateUrl: 'person-form.component.html'
})
export class PersonFormComponent implements OnInit{

    registerForm: FormGroup;

    constructor (){
        this.registerForm = new FormGroup({
            name: new FormControl(),
            last_name: new FormControl(),
            age: new FormControl()
        });
    }
    
    ngOnInit(): void {
        
    }
}