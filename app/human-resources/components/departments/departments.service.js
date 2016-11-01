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
var http_1 = require('@angular/http');
var url_1 = require("../../../url");
require('rxjs/Rx');
var DepartmentsService = (function () {
    //department: Departments;
    function DepartmentsService(http, url) {
        this.http = http;
        this.url = url;
    }
    // getDepartments() {
    //        this.http.get(this.url.getURL() + 'departments')
    //       .toPromise()
    //       .then(response => response.json())
    //       .then(json => json.map(d => new Departments(d.department_id, d.department_name, d.manager_id, d.location_id)))
    //       .then(data => this.departments = data)
    //       .catch(this.handleError);
    //   return  this.departments;
    // }
    DepartmentsService.prototype.getAllDepartments = function () {
        return this.http.get(this.url.getURL() + 'departments')
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    DepartmentsService.prototype.getDepartment = function (department_id) {
        return this.http
            .get(this.url.getURL() + 'department/' + department_id)
            .map(function (response) { return response.json(); });
    };
    DepartmentsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, url_1.Url])
    ], DepartmentsService);
    return DepartmentsService;
}());
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map