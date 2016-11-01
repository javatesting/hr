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
var core_1 = require("@angular/core");
var jobs_1 = require("../jobs");
var router_1 = require("@angular/router");
var url_1 = require("../../../../url");
var http_1 = require("@angular/http");
var jobs_service_1 = require("../jobs.service");
var JobFormComponent = (function () {
    function JobFormComponent(router, activatedRoute, url, http, jobsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.http = http;
        this.jobsService = jobsService;
        this.subHeader = "Job Form";
    }
    JobFormComponent.prototype.ngOnInit = function () {
        console.log('Job Form');
        this.createOrUpdateFormInit();
    };
    JobFormComponent.prototype.create = function () {
        this.jobsService
            .create(this.job)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    JobFormComponent.prototype.update = function () {
        this.jobsService
            .update(this.job)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    JobFormComponent.prototype.refresh = function () {
        this.http
            .get(this.url.getURL() + 'jobs')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); });
        this.router.navigate(['/jobs']);
    };
    JobFormComponent.prototype.createOrUpdateFormInit = function () {
        var _this = this;
        var id = this.url.getParameter('id', this.activatedRoute);
        if (id === undefined || id === null) {
            this.job = new jobs_1.Jobs();
            this.isCreate = true;
        }
        else {
            this.isUpdate = true;
            this.jobsService
                .getJob(id)
                .subscribe(function (data) { return _this.job = data[0]; });
        }
    };
    JobFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'job-form',
            templateUrl: 'job-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, url_1.Url, http_1.Http, jobs_service_1.JobsService])
    ], JobFormComponent);
    return JobFormComponent;
}());
exports.JobFormComponent = JobFormComponent;
//# sourceMappingURL=job-form.component.js.map