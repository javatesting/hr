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
var locations_service_1 = require("../locations.service");
var router_1 = require("@angular/router");
var url_1 = require("../../../../url");
var LocationDetailComponent = (function () {
    function LocationDetailComponent(locationsService, activatedRoute, url) {
        this.locationsService = locationsService;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.subHeader = "Location Details";
        this.linkTo = '/location/edit/form';
        this.service = locationsService;
    }
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.url.getParameter('location_id', this.activatedRoute);
        this.service
            .getEntityById(id)
            .subscribe(function (data) { return _this.location = data[0]; });
        // this.locationsService
        //     .getLocation(id)
        //     .subscribe(data => this.location = data[0]);
    };
    LocationDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'location-detail',
            templateUrl: 'location-detail.component.html'
        }), 
        __metadata('design:paramtypes', [locations_service_1.LocationsService, router_1.ActivatedRoute, url_1.Url])
    ], LocationDetailComponent);
    return LocationDetailComponent;
}());
exports.LocationDetailComponent = LocationDetailComponent;
//# sourceMappingURL=location-detail.component.js.map