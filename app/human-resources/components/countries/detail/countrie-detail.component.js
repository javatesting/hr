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
var countries_service_1 = require("../countries.service");
require('rxjs/add/operator/toPromise');
var CountrieDetailComponent = (function () {
    function CountrieDetailComponent(countrieService, activatedRoute, url) {
        this.countrieService = countrieService;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.subHeader = "Countrie Details";
        this.linkTo = 'countrie/edit/form';
    }
    CountrieDetailComponent.prototype.ngOnInit = function () {
        this.displayCountrie();
    };
    CountrieDetailComponent.prototype.displayCountrie = function () {
        var _this = this;
        var id = this.url.getParameter('country_id', this.activatedRoute);
        this.countrieService
            .getCountrie(id)
            .subscribe(function (data) { return _this.countrie = data[0]; });
    };
    CountrieDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'countrie-detail',
            templateUrl: 'countrie-detail.component.html'
        }), 
        __metadata('design:paramtypes', [countries_service_1.CountriesService, router_1.ActivatedRoute, url_1.Url])
    ], CountrieDetailComponent);
    return CountrieDetailComponent;
}());
exports.CountrieDetailComponent = CountrieDetailComponent;
//# sourceMappingURL=countrie-detail.component.js.map