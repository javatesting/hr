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
var locations_1 = require("../locations");
var router_1 = require("@angular/router");
var url_1 = require("../../../../url");
var http_1 = require("@angular/http");
var LocationFormComponent = (function () {
    function LocationFormComponent(locationsService, router, activatedRoute, url, http) {
        this.locationsService = locationsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.http = http;
        this.subHeader = "Location Form";
    }
    LocationFormComponent.prototype.ngOnInit = function () {
        console.log('Location Form');
        this.createOrUpdateFormInit();
    };
    LocationFormComponent.prototype.create = function () {
        this.locationsService
            .create(this.location)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    LocationFormComponent.prototype.update = function () {
        this.locationsService
            .update(this.location)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    LocationFormComponent.prototype.refresh = function () {
        this.http
            .get(this.url.getURL() + 'locations')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); });
        this.router.navigate(['/locations']);
    };
    LocationFormComponent.prototype.createOrUpdateFormInit = function () {
        var _this = this;
        var id = this.url.getParameter('id', this.activatedRoute);
        if (id === undefined || id === null) {
            this.location = new locations_1.Locations();
            this.isCreate = true;
        }
        else {
            this.isUpdate = true;
            this.locationsService
                .getLocation(id)
                .subscribe(function (data) { return _this.location = data[0]; });
        }
    };
    LocationFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'location-form',
            templateUrl: 'location-form.component.html'
        }), 
        __metadata('design:paramtypes', [locations_service_1.LocationsService, router_1.Router, router_1.ActivatedRoute, url_1.Url, http_1.Http])
    ], LocationFormComponent);
    return LocationFormComponent;
}());
exports.LocationFormComponent = LocationFormComponent;
//# sourceMappingURL=location-form.component.js.map