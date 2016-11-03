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
var countries_service_1 = require("./countries.service");
var CountriesComponent = (function () {
    function CountriesComponent(countriesService, router) {
        this.countriesService = countriesService;
        this.router = router;
        this.subHeader = "Countries";
        this.createNewCountrie = 'countrie/add/form';
        this.getCountries();
    }
    CountriesComponent.prototype.getCountries = function () {
        var _this = this;
        this.countriesService
            .getCountries()
            .then(function (countries) { return _this.countries = countries; });
    };
    CountriesComponent.prototype.showDetails = function (country) {
        var link = ['/country', country.country_id];
        this.router.navigate(link);
    };
    CountriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'countries',
            templateUrl: 'countries.component.html'
        }), 
        __metadata('design:paramtypes', [countries_service_1.CountriesService, router_1.Router])
    ], CountriesComponent);
    return CountriesComponent;
}());
exports.CountriesComponent = CountriesComponent;
//# sourceMappingURL=countries.component.js.map