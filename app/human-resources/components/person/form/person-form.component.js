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
var forms_1 = require("@angular/forms");
var person_service_1 = require("../person.service");
var person_1 = require("../person");
var router_1 = require("@angular/router");
var url_1 = require("../../../../url");
var http_1 = require("@angular/http");
var PersonFormComponent = (function () {
    function PersonFormComponent(personService, router, activatedRoute, url, http, formBuilder) {
        this.personService = personService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.url = url;
        this.http = http;
        this.formBuilder = formBuilder;
    }
    PersonFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.createOrUpdateFormInit();
    };
    PersonFormComponent.prototype.save = function (person) {
        //this.person = person;
        this.initPerson(person);
        this.create();
    };
    PersonFormComponent.prototype.initPerson = function (person) {
        this.person.name = person.name;
        this.person.last_name = person.last_name;
        this.person.age = person.age;
    };
    PersonFormComponent.prototype.initForm = function () {
        this.registerForm = this.formBuilder.group({
            person_id: '',
            name: '',
            last_name: '',
            age: '10'
        });
    };
    PersonFormComponent.prototype.create = function () {
        this.personService
            .create(this.person)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    PersonFormComponent.prototype.update = function () {
        this.personService
            .update(this.person)
            .subscribe(function (data) { return console.log(data); });
        this.refresh();
    };
    PersonFormComponent.prototype.refresh = function () {
        this.http
            .get(this.url.getURL() + 'persons')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); });
        this.router.navigate(['/persons']);
    };
    PersonFormComponent.prototype.createOrUpdateFormInit = function () {
        var _this = this;
        var id = this.url.getParameter('id', this.activatedRoute);
        if (id === undefined || id === null) {
            this.person = new person_1.Person();
            this.isCreate = true;
        }
        else {
            this.isUpdate = true;
            this.personService.getPerson(id).subscribe(function (data) { return _this.person = data[0]; });
        }
    };
    PersonFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-form',
            templateUrl: 'person-form.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router, router_1.ActivatedRoute, url_1.Url, http_1.Http, forms_1.FormBuilder])
    ], PersonFormComponent);
    return PersonFormComponent;
}());
exports.PersonFormComponent = PersonFormComponent;
//# sourceMappingURL=person-form.component.js.map