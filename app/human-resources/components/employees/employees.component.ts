import {Component, OnInit}          from '@angular/core';
import {EmployeesService} from "./employees.service";
import {Employee} from "./employee";
import {Router} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'employee',
  templateUrl: 'employees.component.html'
})
export class EmployeesComponent implements OnInit{
  subHeader = "Employee";
  employees: Employee[];
  
  constructor(
      private employeesService: EmployeesService,
      private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  // getEmployees(): void {
  //   this.employeesService
  //       .getEmployees()
  //       .then(employees => this.employees = employees);
  // }

  getEmployees(): void {
    this.employeesService
        .getEmployees()
        .subscribe(employees => this.employees = employees);
  }

  showDatail(employee_id: number): void {
    this.router.navigate(['/employee', employee_id]);
  }
}
