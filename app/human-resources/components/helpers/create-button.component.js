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
var router_1 = require("@angular/router");
var CreateButtonComponent = (function () {
    function CreateButtonComponent(router) {
        this.router = router;
    }
    CreateButtonComponent.prototype.ngOnInit = function () {
        console.log('CreateButtonComponent: link ' + this.link);
    };
    CreateButtonComponent.prototype.createForm = function () {
        var goTo = [this.link];
        this.router.navigate(goTo);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CreateButtonComponent.prototype, "link", void 0);
    CreateButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-button',
            template: "<button  class=\"btn btn-danger btn-circle\"\n                        style=\"position: fixed; bottom: 5%; right: 3%;\"\n                        (click)=\"createForm()\" > + </button>",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CreateButtonComponent);
    return CreateButtonComponent;
}());
exports.CreateButtonComponent = CreateButtonComponent;
//# sourceMappingURL=create-button.component.js.map