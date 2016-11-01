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
var jobs_service_1 = require("./jobs.service");
var JobsComponent = (function () {
    function JobsComponent(jobsService, router) {
        this.jobsService = jobsService;
        this.router = router;
        this.subHeader = "Jobs";
        this.createNewJob = 'job/add/form';
        this.getJobs();
    }
    JobsComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobsService
            .getJobs()
            .then(function (jobs) { return _this.jobs = jobs; });
    };
    JobsComponent.prototype.showDetails = function (job) {
        this.router.navigate(['/job', job.job_id]);
    };
    JobsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jobs',
            templateUrl: 'jobs.component.html'
        }), 
        __metadata('design:paramtypes', [jobs_service_1.JobsService, router_1.Router])
    ], JobsComponent);
    return JobsComponent;
}());
exports.JobsComponent = JobsComponent;
//# sourceMappingURL=jobs.component.js.map