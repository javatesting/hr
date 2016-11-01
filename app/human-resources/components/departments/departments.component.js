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
var departments_service_1 = require("./departments.service");
require('rxjs/Rx');
var DepartmentsComponent = (function () {
    function DepartmentsComponent(departmentsService, router) {
        this.departmentsService = departmentsService;
        this.router = router;
        this.subHeader = "Departments";
        this.getDepartments();
    }
    DepartmentsComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentsService.getAllDepartments()
            .subscribe(function (departments) {
            _this.departments = departments;
        });
    };
    DepartmentsComponent.prototype.gotoDetail = function (department) {
        var link = ['/department', department.department_id];
        this.router.navigate(link);
    };
    DepartmentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'departments',
            templateUrl: 'departments.component.html'
        }), 
        __metadata('design:paramtypes', [departments_service_1.DepartmentsService, router_1.Router])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());
exports.DepartmentsComponent = DepartmentsComponent;
//# sourceMappingURL=departments.component.js.map