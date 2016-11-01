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
require('rxjs/Rx');
var url_1 = require("../../../../url");
var departments_service_1 = require("../departments.service");
var DepartmentDetailComponent = (function () {
    function DepartmentDetailComponent(departmentsService, activatedRoute, url) {
        this.departmentsService = departmentsService;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.subHeader = "Department Detail";
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        this.displayDepartment();
    };
    DepartmentDetailComponent.prototype.displayDepartment = function () {
        var _this = this;
        var id = this.url.getParameter('department_id', this.activatedRoute);
        this.departmentsService
            .getDepartment(id)
            .subscribe(function (department) {
            _this.department = department[0];
        });
    };
    DepartmentDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'departament-detail',
            templateUrl: 'departament-detail.component.html'
        }), 
        __metadata('design:paramtypes', [departments_service_1.DepartmentsService, router_1.ActivatedRoute, url_1.Url])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=departament-detail.component.js.map