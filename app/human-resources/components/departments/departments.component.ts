import {Component, OnInit}          from '@angular/core';
import {Router} from "@angular/router";
import {Departments} from "./departments";
import {DepartmentsService} from "./departments.service";
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'departments',
  templateUrl: 'departments.component.html'
})
export class DepartmentsComponent{
  subHeader = "Departments";
  departments: Departments[];
  
  constructor(
      private departmentsService: DepartmentsService, private router: Router) {
      this.getDepartments();
  }

  getDepartments():void {
    this.departmentsService.getAllDepartments()
        .subscribe(departments => {
           this.departments = departments
        });
  }

  gotoDetail(department: Departments): void {
    let link = ['/department', department.department_id];
    this.router.navigate(link);
  }
}
