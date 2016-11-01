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
var router_1 = require("@angular/router");
var url_1 = require("../../../../url");
var employees_service_1 = require("../employees.service");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(employeesService, activatedRoute, url) {
        this.employeesService = employeesService;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.subHeader = "Employee Details";
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.url.getParameter('employee_id', this.activatedRoute);
        this.employeesService.getEmployee(id)
            .subscribe(function (data) { return _this.employee = data[0]; });
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'employee-detail',
            templateUrl: 'employee-detail.component.html'
        }), 
        __metadata('design:paramtypes', [employees_service_1.EmployeesService, router_1.ActivatedRoute, url_1.Url])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map