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
var url_1 = require("../../../url");
var http_1 = require("@angular/http");
var PersonService = (function () {
    function PersonService(http, url) {
        this.http = http;
        this.url = url;
    }
    PersonService.prototype.getPersons = function () {
        return this.http
            .get(this.url.getURL() + 'persons')
            .map(function (res) { return res.json(); });
    };
    PersonService.prototype.getPerson = function (id) {
        return this.http
            .get(this.url.getURL() + 'person' + '/' + id)
            .map(function (res) { return res.json(); });
    };
    PersonService.prototype.create = function (person) {
        var body = JSON.stringify(person);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'person/add', body, options)
            .map(function (res) { return res.json(); });
    };
    PersonService.prototype.update = function (person) {
        var body = JSON.stringify(person);
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
        return this.http
            .post(this.url.getURL() + 'person/update', body, options)
            .map(function (res) { return res.json(); });
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, url_1.Url])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map