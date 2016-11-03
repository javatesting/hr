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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var root_component_1 = require('./human-resources/root.component');
var app_routing_1 = require('./app.routing');
var url_1 = require("./url");
var sidebar_component_1 = require("./human-resources/sidebar/sidebar.component");
var top_navbar_component_1 = require("./human-resources/top-navbar/top-navbar.component");
var index_1 = require('./human-resources/components/index');
var index_2 = require('./human-resources/components/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                root_component_1.AppComponent,
                index_2.EmployeesComponent, index_2.EmployeeDetailComponent,
                index_2.CountriesComponent, index_2.CountrieDetailComponent, index_2.CountrieFormComponent,
                index_2.DepartmentsComponent, index_2.DepartmentDetailComponent,
                index_2.JobsComponent, index_2.JobFormComponent, index_2.JobDetailComponent,
                index_2.HistoryComponent,
                index_2.RegionsComponent, index_2.RegionDetailComponent, index_2.RegionFormComponent,
                index_2.LocationsComponent, index_2.LocationDetailComponent, index_2.LocationFormComponent,
                sidebar_component_1.SidebarComponent,
                top_navbar_component_1.TopNavbarComponent,
                index_2.CreateButtonComponent,
                index_2.BackOrEditComponent,
                index_2.PersonComponent, index_2.PersonDetailComponent, index_2.PersonFormComponent
            ],
            providers: [
                index_1.EmployeesService,
                index_1.CountriesService,
                index_1.DepartmentsService,
                index_1.JobsService,
                index_1.LocationsService,
                index_1.RegionsService,
                index_1.HistoryService,
                url_1.Url,
                index_1.PersonService
            ],
            bootstrap: [root_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map