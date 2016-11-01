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
var regions_service_1 = require("./regions.service");
var RegionsComponent = (function () {
    function RegionsComponent(regionsService, router) {
        this.regionsService = regionsService;
        this.router = router;
        this.subHeader = "Regions";
        this.createNewRegion = 'region/add/form';
    }
    RegionsComponent.prototype.ngOnInit = function () {
        this.getLocations();
    };
    RegionsComponent.prototype.getLocations = function () {
        var _this = this;
        this.regionsService.getRegions()
            .then(function (regions) { return _this.regions = regions; });
    };
    RegionsComponent.prototype.showDetail = function (region) {
        var id = region.region_id;
        var link = ['/region', id];
        this.router.navigate(link);
    };
    RegionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'regions',
            templateUrl: 'regions.component.html'
        }), 
        __metadata('design:paramtypes', [regions_service_1.RegionsService, router_1.Router])
    ], RegionsComponent);
    return RegionsComponent;
}());
exports.RegionsComponent = RegionsComponent;
//# sourceMappingURL=regions.component.js.map