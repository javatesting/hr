import {Component, OnInit}          from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Url} from "../../../../url";
import {EmployeesService} from "../employees.service";
import {Employee} from "../employee";

@Component({
  moduleId: module.id,
  selector: 'employee-detail',
  templateUrl: 'employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit{
  subHeader = "Employee Details";
  employee: Employee;
  
  constructor(
      private employeesService: EmployeesService,
      private activatedRoute: ActivatedRoute,
      private url: Url) {
  }

  ngOnInit(): void {
    let id = this.url.getParameter('employee_id', this.activatedRoute);
    this.employeesService.getEmployee(id)
        .subscribe(data => this.employee = data[0]);
  }

}
