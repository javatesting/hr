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
var regions_1 = require("../regions");
var regions_service_1 = require("../regions.service");
var url_1 = require("../../../../url");
var http_1 = require("@angular/http");
var RegionFormComponent = (function () {
    function RegionFormComponent(regionService, router, activatedRoute, url, http) {
        this.regionService = regionService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.http = http;
        this.subHeader = "Region Form ";
    }
    RegionFormComponent.prototype.ngOnInit = function () {
        console.log('Region Form');
        this.createOrUpdateFormInit();
    };
    RegionFormComponent.prototype.create = function () {
        this.regionService
            .create(this.region)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    RegionFormComponent.prototype.update = function () {
        this.regionService
            .update(this.region)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    RegionFormComponent.prototype.refresh = function () {
        this.http
            .get(this.url.getURL() + 'regions')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); });
        this.router.navigate(['/regions']);
    };
    RegionFormComponent.prototype.createOrUpdateFormInit = function () {
        var _this = this;
        var id = this.url.getParameter('id', this.activatedRoute);
        if (id === undefined || id === null) {
            this.region = new regions_1.Regions();
            this.isCreate = true;
        }
        else {
            this.isUpdate = true;
            this.regionService
                .getRegion(id)
                .subscribe(function (data) { return _this.region = data[0]; });
        }
    };
    RegionFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'region-form',
            templateUrl: 'region-form.component.html'
        }), 
        __metadata('design:paramtypes', [regions_service_1.RegionsService, router_1.Router, router_1.ActivatedRoute, url_1.Url, http_1.Http])
    ], RegionFormComponent);
    return RegionFormComponent;
}());
exports.RegionFormComponent = RegionFormComponent;
//# sourceMappingURL=region-form.component.js.map