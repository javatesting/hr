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
var jobs_service_1 = require("../jobs.service");
var common_1 = require('@angular/common');
var JobDetailComponent = (function () {
    function JobDetailComponent(jobsService, activatedRoute, url, router, locationBack) {
        this.jobsService = jobsService;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.router = router;
        this.locationBack = locationBack;
        this.subHeader = "Job Details";
        this.linkTo = '/job/edit/form';
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.url.getParameter('job_id', this.activatedRoute);
        this.jobsService.getJob(id)
            .subscribe(function (data) { return _this.job = data[0]; });
    };
    JobDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'job-detail',
            templateUrl: 'job-detail.component.html'
        }), 
        __metadata('design:paramtypes', [jobs_service_1.JobsService, router_1.ActivatedRoute, url_1.Url, router_1.Router, common_1.Location])
    ], JobDetailComponent);
    return JobDetailComponent;
}());
exports.JobDetailComponent = JobDetailComponent;
//# sourceMappingURL=job-detail.component.js.map