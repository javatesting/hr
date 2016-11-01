import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'create-button',
    template: `<button  class="btn btn-danger btn-circle"
                        style="position: fixed; bottom: 5%; right: 3%;"
                        (click)="createForm()" > + </button>`,
})
export class CreateButtonComponent implements OnInit{

    @Input() public link: string;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        console.log('CreateButtonComponent: link ' + this.link)
    }

    createForm(): void {
        let goTo = [this.link];
        this.router.navigate(goTo);
    }
}


