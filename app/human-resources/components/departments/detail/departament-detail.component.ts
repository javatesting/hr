import {Component, OnInit}          from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Url} from "../../../../url";

import {Departments} from "../departments";
import {DepartmentsService} from "../departments.service";


@Component({
  moduleId: module.id,
  selector: 'departament-detail',
  templateUrl: 'departament-detail.component.html'
})
export class DepartmentDetailComponent implements OnInit{
  subHeader = "Department Detail";
  public department: Departments;

  constructor(
      private departmentsService: DepartmentsService,
      private activatedRoute: ActivatedRoute,
      private url: Url) {
  }

    ngOnInit(): void {
        this.displayDepartment();
    }

  displayDepartment():void {
    let id = this.url.getParameter('department_id', this.activatedRoute);
    this.departmentsService
        .getDepartment(id)
        .subscribe(department => {
           this.department = department[0];
        });
  }

}
