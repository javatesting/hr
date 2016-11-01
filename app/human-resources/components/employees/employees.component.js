"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employees_service_1 = require("./employees.service");
var router_1 = require("@angular/router");
var EmployeesComponent = (function () {
    function EmployeesComponent(employeesService, router) {
        this.employeesService = employeesService;
        this.router = router;
        this.subHeader = "Employee";
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    // getEmployees(): void {
    //   this.employeesService
    //       .getEmployees()
    //       .then(employees => this.employees = employees);
    // }
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeesService
            .getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; });
    };
    EmployeesComponent.prototype.showDatail = function (employee_id) {
        this.router.navigate(['/employee', employee_id]);
    };
    EmployeesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'employee',
            templateUrl: 'employees.component.html'
        }), 
        __metadata('design:paramtypes', [employees_service_1.EmployeesService, router_1.Router])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map