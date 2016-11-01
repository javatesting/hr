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
var regions_service_1 = require("../regions.service");
var url_1 = require("../../../../url");
var RegionDetailComponent = (function () {
    function RegionDetailComponent(regionService, route, url) {
        this.regionService = regionService;
        this.route = route;
        this.url = url;
        this.subHeader = "Region Detail";
        this.linkTo = '/region/edit/form';
    }
    RegionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.url.getParameter('region_id', this.route);
        this.regionService
            .getRegion(id)
            .subscribe(function (regions) { return _this.region = regions[0]; });
    };
    RegionDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'region-detail',
            templateUrl: 'region-detail.component.html'
        }), 
        __metadata('design:paramtypes', [regions_service_1.RegionsService, router_1.ActivatedRoute, url_1.Url])
    ], RegionDetailComponent);
    return RegionDetailComponent;
}());
exports.RegionDetailComponent = RegionDetailComponent;
//# sourceMappingURL=region-detail.component.js.map