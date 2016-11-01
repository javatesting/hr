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
var common_1 = require('@angular/common');
var BackOrEditComponent = (function () {
    function BackOrEditComponent(router, locationBack) {
        this.router = router;
        this.locationBack = locationBack;
    }
    BackOrEditComponent.prototype.goBack = function () {
        this.locationBack.back();
    };
    BackOrEditComponent.prototype.goToEdit = function () {
        var link = [this.linkTo, { 'id': this.id }];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BackOrEditComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BackOrEditComponent.prototype, "linkTo", void 0);
    BackOrEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'back-or-edit',
            template: "<div class=\"row\">\n                    <div class=\"col-md-1\">\n                        <button class=\"btn btn-info\" (click)=\"goBack()\">Back</button>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button class=\"btn btn-success\" (click)=\"goToEdit()\">Edit</button>\n                    </div>\n                </div>",
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], BackOrEditComponent);
    return BackOrEditComponent;
}());
exports.BackOrEditComponent = BackOrEditComponent;
//# sourceMappingURL=back-or-edit.component.js.map