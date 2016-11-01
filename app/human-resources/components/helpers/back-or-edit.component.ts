import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import { Location }               from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'back-or-edit',
    template: `<div class="row">
                    <div class="col-md-1">
                        <button class="btn btn-info" (click)="goBack()">Back</button>
                    </div>
                    <div class="col-md-1">
                        <button class="btn btn-success" (click)="goToEdit()">Edit</button>
                    </div>
                </div>`,
})
export class BackOrEditComponent {

    @Input()
    id: string;

    @Input()
    linkTo: string;


    constructor(private router: Router, private locationBack: Location) {

    }

    goBack(): void {
        this.locationBack.back();
    }

    goToEdit(): void {
        let link = [this.linkTo, {'id': this.id}];
        this.router.navigate(link);
    }
}