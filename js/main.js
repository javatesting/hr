webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// main entry point
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

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
	__webpack_require__(24);
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(58);
	var http_1 = __webpack_require__(62);
	var root_component_1 = __webpack_require__(63);
	var app_routing_1 = __webpack_require__(65);
	var url_1 = __webpack_require__(86);
	var sidebar_component_1 = __webpack_require__(416);
	var top_navbar_component_1 = __webpack_require__(418);
	var index_1 = __webpack_require__(82);
	var index_2 = __webpack_require__(82);
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


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Observable class extensions
	__webpack_require__(25);
	__webpack_require__(31);
	// Observable operators
	__webpack_require__(34);
	__webpack_require__(41);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(54);
	__webpack_require__(56);


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.title = 'HUMAN RESOURCES';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'my-app',
	            template: __webpack_require__(64),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = "<top-navbar></top-navbar>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 sidebar\">\r\n\r\n    <sidebar></sidebar>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-10 col-md-offset-2 main\">\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(66);
	var index_1 = __webpack_require__(82);
	var appRoutes = [
	    {
	        path: '',
	        redirectTo: '/employees',
	        pathMatch: 'full'
	    },
	    {
	        path: 'employees', component: index_1.EmployeesComponent
	    },
	    {
	        path: 'employee/:employee_id', component: index_1.EmployeeDetailComponent
	    },
	    {
	        path: 'countries', component: index_1.CountriesComponent
	    },
	    {
	        path: 'country/:country_id', component: index_1.CountrieDetailComponent
	    },
	    {
	        path: 'countrie/add/form', component: index_1.CountrieFormComponent
	    },
	    {
	        path: 'countrie/edit/form', component: index_1.CountrieFormComponent
	    },
	    {
	        path: 'departments', component: index_1.DepartmentsComponent
	    },
	    {
	        path: 'department/:department_id', component: index_1.DepartmentDetailComponent
	    },
	    {
	        path: 'jobs', component: index_1.JobsComponent
	    },
	    {
	        path: 'job/:job_id', component: index_1.JobDetailComponent
	    },
	    {
	        path: 'job/add/form', component: index_1.JobFormComponent
	    },
	    {
	        path: 'job/edit/form', component: index_1.JobFormComponent
	    },
	    {
	        path: 'locations', component: index_1.LocationsComponent
	    },
	    {
	        path: 'location/:location_id', component: index_1.LocationDetailComponent
	    },
	    {
	        path: 'location/add/form', component: index_1.LocationFormComponent
	    },
	    {
	        path: 'location/edit/form', component: index_1.LocationFormComponent
	    },
	    {
	        path: 'regions', component: index_1.RegionsComponent
	    },
	    {
	        path: 'region/:region_id', component: index_1.RegionDetailComponent
	    },
	    {
	        path: 'region/add/form', component: index_1.RegionFormComponent
	    },
	    {
	        path: 'region/edit/form', component: index_1.RegionFormComponent
	    },
	    {
	        path: 'history', component: index_1.HistoryComponent
	    },
	    {
	        path: 'persons', component: index_1.PersonComponent
	    },
	    {
	        path: 'person/:person_id', component: index_1.PersonDetailComponent
	    },
	    {
	        path: 'person/add/form', component: index_1.PersonFormComponent
	    },
	    {
	        path: 'person/edit/form', component: index_1.PersonFormComponent
	    }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(83));
	__export(__webpack_require__(84));
	__export(__webpack_require__(364));
	__export(__webpack_require__(366));
	__export(__webpack_require__(369));
	__export(__webpack_require__(370));
	__export(__webpack_require__(372));
	__export(__webpack_require__(374));
	__export(__webpack_require__(377));
	__export(__webpack_require__(378));
	__export(__webpack_require__(380));
	__export(__webpack_require__(382));
	__export(__webpack_require__(385));
	__export(__webpack_require__(386));
	__export(__webpack_require__(388));
	__export(__webpack_require__(389));
	__export(__webpack_require__(391));
	__export(__webpack_require__(392));
	__export(__webpack_require__(394));
	__export(__webpack_require__(395));
	__export(__webpack_require__(397));
	__export(__webpack_require__(399));
	__export(__webpack_require__(402));
	__export(__webpack_require__(404));
	__export(__webpack_require__(406));
	__export(__webpack_require__(407));
	__export(__webpack_require__(408));
	__export(__webpack_require__(409));
	__export(__webpack_require__(411));
	__export(__webpack_require__(413));


/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var regions_service_1 = __webpack_require__(84);
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
	            //moduleId: module.id,
	            selector: 'regions',
	            template: __webpack_require__(363)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof regions_service_1.RegionsService !== 'undefined' && regions_service_1.RegionsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], RegionsComponent);
	    return RegionsComponent;
	    var _a, _b;
	}());
	exports.RegionsComponent = RegionsComponent;


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(62);
	__webpack_require__(85);
	var url_1 = __webpack_require__(86);
	__webpack_require__(87);
	var RegionsService = (function () {
	    function RegionsService(http, url) {
	        this.http = http;
	        this.url = url;
	        this.debug = '?XDEBUG_SESSION_START=15603';
	        // this.headers.append('Content-Type', 'application/json');
	        // this.headers.append('Access-Control-Allow-Origin', '*');
	        // this.headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8' );
	    }
	    RegionsService.prototype.getRegions = function () {
	        return this.http.get(this.url.getURL() + 'regions')
	            .toPromise()
	            .then(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    RegionsService.prototype.getRegion = function (id) {
	        return this.http
	            .get(this.url.getURL() + 'region' + '/' + id)
	            .map(function (res) { return res.json(); });
	    };
	    RegionsService.prototype.create = function (region) {
	        var body = JSON.stringify(region);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'region/add' + this.debug, body, options)
	            .map(function (res) { return res.json(); });
	    };
	    RegionsService.prototype.update = function (region) {
	        var body = JSON.stringify(region);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'region/update' + this.debug, body, options)
	            .map(function (res) { return res.json(); });
	    };
	    RegionsService.prototype.handleError = function (error) {
	        console.error('An error occurred', error); // for demo purposes only
	        return Promise.reject(error.message || error);
	    };
	    RegionsService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], RegionsService);
	    return RegionsService;
	    var _a, _b;
	}());
	exports.RegionsService = RegionsService;


/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var Url = (function () {
	    function Url() {
	        this.url = 'http://hr.platforma.net.ua/';
	    }
	    //public url = 'http://hr/';
	    Url.prototype.getURL = function () {
	        return this.url;
	    };
	    Url.prototype.getParameter = function (param, route) {
	        var dataParam;
	        route.params.forEach(function (params) { return dataParam = params[param]; });
	        return dataParam;
	    };
	    Url = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Url);
	    return Url;
	}());
	exports.Url = Url;


/***/ },

/***/ 363:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-11\">\r\n        <h2 class=\"sub-header\">{{subHeader}}  </h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n      <thead>\r\n       <tr>\r\n         <td >ID</td>\r\n         <td >REGION NAME</td>\r\n       </tr>\r\n      </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let region of regions\" (dblclick)=\"showDetail(region)\">\r\n        <td >{{region.region_id}}</td>\r\n        <td >{{region.region_name}}</td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n</div>\r\n\r\n<create-button [link]=\"createNewRegion\"></create-button>\r\n<!--<button  class=\"btn btn-danger btn-circle\" style=\"position: fixed; bottom: 5%; right: 3%;\"-->\r\n         <!--(click)=\"createForm()\" > + </button>-->";

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	__webpack_require__(87);
	var regions_service_1 = __webpack_require__(84);
	var url_1 = __webpack_require__(86);
	var RegionDetailComponent = (function () {
	    function RegionDetailComponent(regionService, route, url) {
	        this.regionService = regionService;
	        this.route = route;
	        this.url = url;
	        this.subHeader = "Region Detail";
	        this.linkTo = '/region/edit/form';
	    }
	    RegionDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('region_id', this.route);
	        this.regionService
	            .getRegion(id)
	            .subscribe(function (regions) { return _this.region = regions[0]; });
	    };
	    RegionDetailComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'region-detail',
	            template: __webpack_require__(365)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof regions_service_1.RegionsService !== 'undefined' && regions_service_1.RegionsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object])
	    ], RegionDetailComponent);
	    return RegionDetailComponent;
	    var _a, _b, _c;
	}());
	exports.RegionDetailComponent = RegionDetailComponent;


/***/ },

/***/ 365:
/***/ function(module, exports) {

	module.exports = "<h2 >{{titles}}</h2>\r\n<div *ngIf=\"region\">\r\n    <table class=\"table\" style=\"width: 30%;\">\r\n        <tr>\r\n            <td>REGION ID</td>\r\n            <td>{{region.region_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>REGION NAME</td>\r\n            <td>{{region.region_name}}</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <back-or-edit [id]=\"region.region_id\" [linkTo]=\"linkTo\" ></back-or-edit>\r\n</div>\r\n\r\n\r\n";

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	__webpack_require__(87);
	var regions_1 = __webpack_require__(367);
	var regions_service_1 = __webpack_require__(84);
	var url_1 = __webpack_require__(86);
	var http_1 = __webpack_require__(62);
	var RegionFormComponent = (function () {
	    function RegionFormComponent(regionService, router, activatedRoute, url, http) {
	        this.regionService = regionService;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.url = url;
	        this.http = http;
	        this.subHeader = "Region Form ";
	    }
	    RegionFormComponent.prototype.ngOnInit = function () {
	        console.log('Region Form');
	        this.createOrUpdateFormInit();
	    };
	    RegionFormComponent.prototype.create = function () {
	        this.regionService
	            .create(this.region)
	            .subscribe(function (data) { return console.log(data); });
	        this.refresh();
	    };
	    RegionFormComponent.prototype.update = function () {
	        this.regionService
	            .update(this.region)
	            .subscribe(function (data) { return console.log(data); });
	        this.refresh();
	    };
	    RegionFormComponent.prototype.refresh = function () {
	        this.http
	            .get(this.url.getURL() + 'regions')
	            .map(function (res) { return res.json(); })
	            .subscribe(function (data) { return console.log(data); });
	        this.router.navigate(['/regions']);
	    };
	    RegionFormComponent.prototype.createOrUpdateFormInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('id', this.activatedRoute);
	        if (id === undefined || id === null) {
	            this.region = new regions_1.Regions();
	            this.isCreate = true;
	        }
	        else {
	            this.isUpdate = true;
	            this.regionService
	                .getRegion(id)
	                .subscribe(function (data) { return _this.region = data[0]; });
	        }
	    };
	    RegionFormComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'region-form',
	            template: __webpack_require__(368)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof regions_service_1.RegionsService !== 'undefined' && regions_service_1.RegionsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _d) || Object, (typeof (_e = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _e) || Object])
	    ], RegionFormComponent);
	    return RegionFormComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.RegionFormComponent = RegionFormComponent;


/***/ },

/***/ 367:
/***/ function(module, exports) {

	"use strict";
	var Regions = (function () {
	    function Regions() {
	    }
	    return Regions;
	}());
	exports.Regions = Regions;


/***/ },

/***/ 368:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div style=\"width: 20%;\">\r\n    <form *ngIf=\"region\" (ngSubmit)=\"onSubmit()\" #regionAddForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"regionId\">Region Id</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"regionId\"\r\n                   required\r\n                   [(ngModel)]=\"region.region_id\"\r\n                   name=\"regionId\"\r\n                   #regionName=\"ngModel\" >\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"regionName\">Region Name</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"regionName\"\r\n                   required\r\n                   [(ngModel)]=\"region.region_name\"\r\n                   name=\"regionName\"\r\n                   #regionName=\"ngModel\" >\r\n\r\n        </div>\r\n\r\n        <button *ngIf=\"isCreate\" type=\"button\" class=\"btn btn-success\" (click)=\"create()\">Create</button>\r\n        <button *ngIf=\"isUpdate\" type=\"button\" class=\"btn btn-success\" (click)=\"update()\">Update</button>\r\n\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n";

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var locations_service_1 = __webpack_require__(370);
	var LocationsComponent = (function () {
	    function LocationsComponent(locationsService, router) {
	        this.locationsService = locationsService;
	        this.router = router;
	        this.subHeader = "Locations";
	        this.createNewLocation = 'location/add/form';
	        this.getLocations();
	    }
	    LocationsComponent.prototype.getLocations = function () {
	        var _this = this;
	        this.locationsService.getLocations()
	            .then(function (locations) { return _this.locations = locations; });
	    };
	    LocationsComponent.prototype.showDetails = function (location) {
	        this.router.navigate(['/location', location.location_id]);
	    };
	    LocationsComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'locations',
	            template: __webpack_require__(371)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof locations_service_1.LocationsService !== 'undefined' && locations_service_1.LocationsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], LocationsComponent);
	    return LocationsComponent;
	    var _a, _b;
	}());
	exports.LocationsComponent = LocationsComponent;


/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(62);
	__webpack_require__(85);
	var url_1 = __webpack_require__(86);
	var LocationsService = (function () {
	    function LocationsService(http, url) {
	        this.http = http;
	        this.url = url;
	    }
	    LocationsService.prototype.getLocations = function () {
	        return this.http.get(this.url.getURL() + 'locations')
	            .toPromise()
	            .then(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    // getLocations() {
	    //   return this.http.get(this.url.getURL() + 'locations')
	    //       .map(res => <Locations[]> res.json());
	    // }
	    LocationsService.prototype.getLocation = function (id) {
	        return this.http
	            .get(this.url.getURL() + 'location' + '/' + id)
	            .map(function (res) { return res.json(); });
	    };
	    LocationsService.prototype.create = function (location) {
	        var body = JSON.stringify(location);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'location/add', body, options)
	            .map(function (res) { return res.json(); });
	    };
	    LocationsService.prototype.update = function (location) {
	        var body = JSON.stringify(location);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'location/update', body, options)
	            .map(function (res) { return res.json(); });
	    };
	    LocationsService.prototype.handleError = function (error) {
	        console.error('An error occurred', error); // for demo purposes only
	        return Promise.reject(error.message || error);
	    };
	    LocationsService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], LocationsService);
	    return LocationsService;
	    var _a, _b;
	}());
	exports.LocationsService = LocationsService;


/***/ },

/***/ 371:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"sub-header\">{{subHeader}}</h2>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n      <thead>\r\n       <tr>\r\n         <td >ID</td>\r\n         <td >STREET ADDRESS</td>\r\n         <td >POSTAL CODE</td>\r\n         <td >CITY</td>\r\n         <td >STATE PROVINCE</td>\r\n         <td >COUNTRY ID</td>\r\n       </tr>\r\n      </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let location of locations\" (dblclick)=\"showDetails(location)\">\r\n        <td >{{location.location_id}}</td>\r\n        <td >{{location.street_address}}</td>\r\n        <td >{{location.postal_code}}</td>\r\n        <td >{{location.city}}</td>\r\n        <td >{{location.state_province}}</td>\r\n        <td >{{location.country_id}}</td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n</div>\r\n<create-button [link]=\"createNewLocation\"></create-button>\r\n\r\n";

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var locations_service_1 = __webpack_require__(370);
	var router_1 = __webpack_require__(66);
	var url_1 = __webpack_require__(86);
	var common_1 = __webpack_require__(22);
	var LocationDetailComponent = (function () {
	    function LocationDetailComponent(locationsService, activatedRoute, url, router, locationBack) {
	        this.locationsService = locationsService;
	        this.activatedRoute = activatedRoute;
	        this.url = url;
	        this.router = router;
	        this.locationBack = locationBack;
	        this.subHeader = "Location Details";
	        this.linkTo = '/location/edit/form';
	    }
	    LocationDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('location_id', this.activatedRoute);
	        this.locationsService
	            .getLocation(id)
	            .subscribe(function (data) { return _this.location = data[0]; });
	    };
	    LocationDetailComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'location-detail',
	            template: __webpack_require__(373)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof locations_service_1.LocationsService !== 'undefined' && locations_service_1.LocationsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object])
	    ], LocationDetailComponent);
	    return LocationDetailComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.LocationDetailComponent = LocationDetailComponent;


/***/ },

/***/ 373:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div *ngIf=\"location\">\r\n\r\n    <table class=\"table\" style=\"width: 30%;\">\r\n        <tr>\r\n            <td>LOCATION ID</td>\r\n            <td>{{location.location_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>STREET ADDRESS</td>\r\n            <td>{{location.street_address}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>POSTAL CODE</td>\r\n            <td>{{location.postal_code}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>CITY</td>\r\n            <td>{{location.city}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>STATE PROVINCE</td>\r\n            <td>{{location.state_province}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>COUNTRY ID</td>\r\n            <td>{{location.country_id}}</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <back-or-edit [id]=\"location.location_id\" [linkTo]=\"linkTo\" ></back-or-edit>\r\n</div>\r\n\r\n\r\n";

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var locations_service_1 = __webpack_require__(370);
	var locations_1 = __webpack_require__(375);
	var router_1 = __webpack_require__(66);
	var url_1 = __webpack_require__(86);
	var http_1 = __webpack_require__(62);
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
	            //moduleId: module.id,
	            selector: 'location-form',
	            template: __webpack_require__(376)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof locations_service_1.LocationsService !== 'undefined' && locations_service_1.LocationsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _d) || Object, (typeof (_e = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _e) || Object])
	    ], LocationFormComponent);
	    return LocationFormComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.LocationFormComponent = LocationFormComponent;


/***/ },

/***/ 375:
/***/ function(module, exports) {

	"use strict";
	var Locations = (function () {
	    function Locations() {
	    }
	    return Locations;
	}());
	exports.Locations = Locations;


/***/ },

/***/ 376:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div style=\"width: 40%;\">\r\n    <form *ngIf=\"location\" (ngSubmit)=\"onSubmit()\" #locationForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label >LOCATION ID</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"location id (type number)\"\r\n                   id=\"locationId\"\r\n                   required\r\n                   [(ngModel)]=\"location.location_id\"\r\n                   name=\"locationId\"\r\n                   #locationId=\"ngModel\" >\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>STREET ADDRESS</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"street address (type string)\"\r\n                   id=\"streetAddress\"\r\n                   required\r\n                   [(ngModel)]=\"location.street_address\"\r\n                   name=\"streetAddress\"\r\n                   #streetAddress=\"ngModel\" >\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>POSTAL CODE</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"postal code (type string)\"\r\n                   id=\"postalCode\"\r\n                   required\r\n                   [(ngModel)]=\"location.postal_code\"\r\n                   name=\"postalCode\"\r\n                   #postalCode=\"ngModel\" >\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>CITY</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"city (type string)\"\r\n                   id=\"city\"\r\n                   required\r\n                   [(ngModel)]=\"location.city\"\r\n                   name=\"city\"\r\n                   #city=\"ngModel\" >\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>STATE PROVINCE</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"state province (type string)\"\r\n                   id=\"stateProvince\"\r\n                   required\r\n                   [(ngModel)]=\"location.state_province\"\r\n                   name=\"stateProvince\"\r\n                   #stateProvince=\"ngModel\" >\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>COUNTRY ID</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"country id (type string)\"\r\n                   id=\"countryId\"\r\n                   required\r\n                   [(ngModel)]=\"location.country_id\"\r\n                   name=\"countryId\"\r\n                   #countryId=\"ngModel\" >\r\n\r\n        </div>\r\n\r\n        <button *ngIf=\"isCreate\" type=\"button\" class=\"btn btn-success\" (click)=\"create()\">Create</button>\r\n        <button *ngIf=\"isUpdate\" type=\"button\" class=\"btn btn-success\" (click)=\"update()\">Update</button>\r\n\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var jobs_service_1 = __webpack_require__(378);
	var JobsComponent = (function () {
	    function JobsComponent(jobsService, router) {
	        this.jobsService = jobsService;
	        this.router = router;
	        this.subHeader = "Jobs";
	        this.createNewJob = 'job/add/form';
	        this.getJobs();
	    }
	    JobsComponent.prototype.getJobs = function () {
	        var _this = this;
	        this.jobsService
	            .getJobs()
	            .then(function (jobs) { return _this.jobs = jobs; });
	    };
	    JobsComponent.prototype.showDetails = function (job) {
	        this.router.navigate(['/job', job.job_id]);
	    };
	    JobsComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'jobs',
	            template: __webpack_require__(379)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof jobs_service_1.JobsService !== 'undefined' && jobs_service_1.JobsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], JobsComponent);
	    return JobsComponent;
	    var _a, _b;
	}());
	exports.JobsComponent = JobsComponent;


/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(62);
	__webpack_require__(85);
	var url_1 = __webpack_require__(86);
	var JobsService = (function () {
	    function JobsService(http, url) {
	        this.http = http;
	        this.url = url;
	    }
	    JobsService.prototype.getJobs = function () {
	        return this.http.get(this.url.getURL() + 'jobs')
	            .toPromise()
	            .then(function (response) { return response.json(); })
	            .catch(this.handleError);
	    };
	    JobsService.prototype.getJob = function (id) {
	        return this.http
	            .get(this.url.getURL() + 'job' + '/' + id)
	            .map(function (res) { return res.json(); });
	    };
	    JobsService.prototype.create = function (job) {
	        var body = JSON.stringify(job);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'job/add', body, options)
	            .map(function (res) { return res.json(); });
	    };
	    JobsService.prototype.update = function (job) {
	        var body = JSON.stringify(job);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'job/update', body, options)
	            .map(function (res) { return res.json(); });
	    };
	    JobsService.prototype.handleError = function (error) {
	        console.error('An error occurred', error); // for demo purposes only
	        return Promise.reject(error.message || error);
	    };
	    JobsService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], JobsService);
	    return JobsService;
	    var _a, _b;
	}());
	exports.JobsService = JobsService;


/***/ },

/***/ 379:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"sub-header\">{{subHeader}}</h2>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n      <thead>\r\n       <tr>\r\n         <td >JOB ID</td>\r\n         <td >JOB TITLE</td>\r\n         <td >MIN SALARY</td>\r\n         <td >MAX SALARY</td>\r\n       </tr>\r\n      </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let job of jobs\" (click)=\"showDetails(job)\">\r\n        <td >{{job.job_id}}</td>\r\n        <td >{{job.job_title}}</td>\r\n        <td >{{job.min_salary}}</td>\r\n        <td >{{job.max_salary}}</td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n</div>\r\n<create-button [link]=\"createNewJob\"></create-button>\r\n\r\n";

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var url_1 = __webpack_require__(86);
	var jobs_service_1 = __webpack_require__(378);
	var common_1 = __webpack_require__(22);
	var JobDetailComponent = (function () {
	    function JobDetailComponent(jobsService, activatedRoute, url, router, locationBack) {
	        this.jobsService = jobsService;
	        this.activatedRoute = activatedRoute;
	        this.url = url;
	        this.router = router;
	        this.locationBack = locationBack;
	        this.subHeader = "Job Details";
	        this.linkTo = '/job/edit/form';
	    }
	    JobDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('job_id', this.activatedRoute);
	        this.jobsService.getJob(id)
	            .subscribe(function (data) { return _this.job = data[0]; });
	    };
	    JobDetailComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'job-detail',
	            template: __webpack_require__(381)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof jobs_service_1.JobsService !== 'undefined' && jobs_service_1.JobsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _e) || Object])
	    ], JobDetailComponent);
	    return JobDetailComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.JobDetailComponent = JobDetailComponent;


/***/ },

/***/ 381:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div *ngIf=\"job\">\r\n    <table class=\"table\" style=\"width: 30%;\">\r\n        <tr>\r\n            <td>JOB ID :</td>\r\n            <td>{{job.job_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>JOB TITLE :</td>\r\n            <td>{{job.job_title}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>MIN SALARY :</td>\r\n            <td>{{job.min_salary}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>MAX SALARY :</td>\r\n            <td>{{job.max_salary}}</td>\r\n        </tr>\r\n\r\n    </table>\r\n\r\n    <back-or-edit [id]=\"job.job_id\" [linkTo]=\"linkTo\" ></back-or-edit>\r\n</div>\r\n\r\n";

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var jobs_1 = __webpack_require__(383);
	var router_1 = __webpack_require__(66);
	var url_1 = __webpack_require__(86);
	var http_1 = __webpack_require__(62);
	var jobs_service_1 = __webpack_require__(378);
	var JobFormComponent = (function () {
	    function JobFormComponent(router, activatedRoute, url, http, jobsService) {
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.url = url;
	        this.http = http;
	        this.jobsService = jobsService;
	        this.subHeader = "Job Form";
	    }
	    JobFormComponent.prototype.ngOnInit = function () {
	        console.log('Job Form');
	        this.createOrUpdateFormInit();
	    };
	    JobFormComponent.prototype.create = function () {
	        this.jobsService
	            .create(this.job)
	            .subscribe(function (data) { return console.log(data); });
	        this.refresh();
	    };
	    JobFormComponent.prototype.update = function () {
	        this.jobsService
	            .update(this.job)
	            .subscribe(function (data) { return console.log(data); });
	        this.refresh();
	    };
	    JobFormComponent.prototype.refresh = function () {
	        this.http
	            .get(this.url.getURL() + 'jobs')
	            .map(function (res) { return res.json(); })
	            .subscribe(function (data) { return console.log(data); });
	        this.router.navigate(['/jobs']);
	    };
	    JobFormComponent.prototype.createOrUpdateFormInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('id', this.activatedRoute);
	        if (id === undefined || id === null) {
	            this.job = new jobs_1.Jobs();
	            this.isCreate = true;
	        }
	        else {
	            this.isUpdate = true;
	            this.jobsService
	                .getJob(id)
	                .subscribe(function (data) { return _this.job = data[0]; });
	        }
	    };
	    JobFormComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'job-form',
	            template: __webpack_require__(384)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object, (typeof (_d = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _d) || Object, (typeof (_e = typeof jobs_service_1.JobsService !== 'undefined' && jobs_service_1.JobsService) === 'function' && _e) || Object])
	    ], JobFormComponent);
	    return JobFormComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.JobFormComponent = JobFormComponent;


/***/ },

/***/ 383:
/***/ function(module, exports) {

	"use strict";
	var Jobs = (function () {
	    function Jobs() {
	    }
	    return Jobs;
	}());
	exports.Jobs = Jobs;


/***/ },

/***/ 384:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div style=\"width: 40%;\">\r\n    <form *ngIf=\"job\" (ngSubmit)=\"onSubmit()\" #jobForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label >JOB ID</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"job id (type string)\"\r\n                   id=\"jobId\"\r\n                   required\r\n                   [(ngModel)]=\"job.job_id\"\r\n                   name=\"jobId\"\r\n                   #jobId=\"ngModel\" >\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>JOB TITLE</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"job title (type string)\"\r\n                   id=\"jobTitle\"\r\n                   required\r\n                   [(ngModel)]=\"job.job_title\"\r\n                   name=\"jobTitle\"\r\n                   #jobTitle=\"ngModel\" >\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>MIN SALARY</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"min salary (type number)\"\r\n                   id=\"minSalary\"\r\n                   required\r\n                   [(ngModel)]=\"job.min_salary\"\r\n                   name=\"minSalary\"\r\n                   #minSalary=\"ngModel\" >\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>MAX SALARY</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"max salary (type number)\"\r\n                   id=\"maxSalary\"\r\n                   required\r\n                   [(ngModel)]=\"job.max_salary\"\r\n                   name=\"maxSalary\"\r\n                   #maxSalary=\"ngModel\" >\r\n\r\n        </div>\r\n\r\n        <button *ngIf=\"isCreate\" type=\"button\" class=\"btn btn-success\" (click)=\"create()\">Create</button>\r\n        <button *ngIf=\"isUpdate\" type=\"button\" class=\"btn btn-success\" (click)=\"update()\">Update</button>\r\n\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var history_service_1 = __webpack_require__(386);
	__webpack_require__(85);
	var HistoryComponent = (function () {
	    function HistoryComponent(historyService, router) {
	        this.historyService = historyService;
	        this.router = router;
	        this.subHeader = "History";
	        this.getHistory();
	    }
	    HistoryComponent.prototype.getHistory = function () {
	        var _this = this;
	        this.historyService
	            .getHistory()
	            .then(function (history) { return _this.historys = history; });
	    };
	    HistoryComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'history',
	            template: __webpack_require__(387)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof history_service_1.HistoryService !== 'undefined' && history_service_1.HistoryService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], HistoryComponent);
	    return HistoryComponent;
	    var _a, _b;
	}());
	exports.HistoryComponent = HistoryComponent;


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(62);
	__webpack_require__(85);
	var url_1 = __webpack_require__(86);
	var HistoryService = (function () {
	    function HistoryService(http, url) {
	        this.http = http;
	        this.url = url;
	    }
	    HistoryService.prototype.getHistory = function () {
	        return this.http.get(this.url.getURL() + 'history')
	            .toPromise()
	            .then(function (response) { return response.json(); })
	            .catch(this.handleError);
	    };
	    HistoryService.prototype.handleError = function (error) {
	        console.error('An error occurred', error); // for demo purposes only
	        return Promise.reject(error.message || error);
	    };
	    HistoryService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], HistoryService);
	    return HistoryService;
	    var _a, _b;
	}());
	exports.HistoryService = HistoryService;


/***/ },

/***/ 387:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"sub-header\">{{subHeader}}</h2>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n      <thead>\r\n       <tr>\r\n         <td >EMPLOYEE ID</td>\r\n         <td >START DATE</td>\r\n         <td >END DATE</td>\r\n         <td >JOB ID</td>\r\n         <td >DEPARTMENT ID</td>\r\n       </tr>\r\n      </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let history of historys\">\r\n        <td >{{history.employee_id}}</td>\r\n        <td >{{history.start_date}}</td>\r\n        <td >{{history.end_date}}</td>\r\n        <td >{{history.job_id}}</td>\r\n        <td >{{history.department_id}}</td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n</div>\r\n\r\n";

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var employees_service_1 = __webpack_require__(389);
	var router_1 = __webpack_require__(66);
	var EmployeesComponent = (function () {
	    function EmployeesComponent(employeesService, router) {
	        this.employeesService = employeesService;
	        this.router = router;
	        this.subHeader = "Employee";
	    }
	    EmployeesComponent.prototype.ngOnInit = function () {
	        this.getEmployees();
	    };
	    // getEmployees(): void {
	    //   this.employeesService
	    //       .getEmployees()
	    //       .then(employees => this.employees = employees);
	    // }
	    EmployeesComponent.prototype.getEmployees = function () {
	        var _this = this;
	        this.employeesService
	            .getEmployees()
	            .subscribe(function (employees) { return _this.employees = employees; });
	    };
	    EmployeesComponent.prototype.showDatail = function (employee_id) {
	        this.router.navigate(['/employee', employee_id]);
	    };
	    EmployeesComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'employee',
	            template: __webpack_require__(390)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof employees_service_1.EmployeesService !== 'undefined' && employees_service_1.EmployeesService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], EmployeesComponent);
	    return EmployeesComponent;
	    var _a, _b;
	}());
	exports.EmployeesComponent = EmployeesComponent;


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(62);
	__webpack_require__(85);
	var url_1 = __webpack_require__(86);
	var EmployeesService = (function () {
	    function EmployeesService(http, url) {
	        this.http = http;
	        this.url = url;
	        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	    }
	    // getEmployees() {
	    //   return this.http.get(this.url.getURL() + 'employees')
	    //              .toPromise()
	    //              .then(response => response.json())
	    //              .catch(this.handleError);
	    // }
	    EmployeesService.prototype.getEmployees = function () {
	        return this.http.get(this.url.getURL() + 'employees')
	            .map(function (response) { return response.json(); });
	    };
	    EmployeesService.prototype.getEmployee = function (id) {
	        return this.http.get(this.url.getURL() + 'employee' + '/' + id)
	            .map(function (response) { return response.json(); });
	    };
	    EmployeesService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], EmployeesService);
	    return EmployeesService;
	    var _a, _b;
	}());
	exports.EmployeesService = EmployeesService;


/***/ },

/***/ 390:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"sub-header\">{{subHeader}}</h2>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <td >N</td>\r\n        <td >FIRST NAME</td>\r\n        <td >LAST NAME</td>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let employee of employees; let nomer = index\" (dblclick)=\"showDatail(employee.employee_id)\">\r\n          <td >{{nomer + 1}}</td>\r\n          <td>{{employee.first_name}}</td>\r\n          <td>{{employee.last_name}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n";

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var departments_service_1 = __webpack_require__(392);
	__webpack_require__(87);
	var DepartmentsComponent = (function () {
	    function DepartmentsComponent(departmentsService, router) {
	        this.departmentsService = departmentsService;
	        this.router = router;
	        this.subHeader = "Departments";
	        this.getDepartments();
	    }
	    DepartmentsComponent.prototype.getDepartments = function () {
	        var _this = this;
	        this.departmentsService.getAllDepartments()
	            .subscribe(function (departments) {
	            _this.departments = departments;
	        });
	    };
	    DepartmentsComponent.prototype.gotoDetail = function (department) {
	        var link = ['/department', department.department_id];
	        this.router.navigate(link);
	    };
	    DepartmentsComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'departments',
	            template: __webpack_require__(393)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof departments_service_1.DepartmentsService !== 'undefined' && departments_service_1.DepartmentsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], DepartmentsComponent);
	    return DepartmentsComponent;
	    var _a, _b;
	}());
	exports.DepartmentsComponent = DepartmentsComponent;


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(62);
	var url_1 = __webpack_require__(86);
	__webpack_require__(87);
	var DepartmentsService = (function () {
	    //department: Departments;
	    function DepartmentsService(http, url) {
	        this.http = http;
	        this.url = url;
	    }
	    // getDepartments() {
	    //        this.http.get(this.url.getURL() + 'departments')
	    //       .toPromise()
	    //       .then(response => response.json())
	    //       .then(json => json.map(d => new Departments(d.department_id, d.department_name, d.manager_id, d.location_id)))
	    //       .then(data => this.departments = data)
	    //       .catch(this.handleError);
	    //   return  this.departments;
	    // }
	    DepartmentsService.prototype.getAllDepartments = function () {
	        return this.http.get(this.url.getURL() + 'departments')
	            .map(function (response) { return response.json(); });
	        //.catch(this.handleError);
	    };
	    DepartmentsService.prototype.getDepartment = function (department_id) {
	        return this.http
	            .get(this.url.getURL() + 'department/' + department_id)
	            .map(function (response) { return response.json(); });
	    };
	    DepartmentsService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], DepartmentsService);
	    return DepartmentsService;
	    var _a, _b;
	}());
	exports.DepartmentsService = DepartmentsService;


/***/ },

/***/ 393:
/***/ function(module, exports) {

	module.exports = "<h2>{{subHeader}}</h2>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n      <thead>\r\n       <tr>\r\n         <td >DEPARTMENT ID</td>\r\n         <td >DEPARTMENT NAME</td>\r\n         <td >MANAGER ID</td>\r\n         <td >LOCATION ID</td>\r\n       </tr>\r\n      </thead>\r\n      <tbody></tbody>\r\n        <tr *ngFor=\"let department of departments\" (dblclick)=\"gotoDetail(department)\">\r\n          <td >{{department.department_id}}</td>\r\n          <td >{{department.department_name}}</td>\r\n          <td >{{department.manager_id}}</td>\r\n          <td >{{department.location_id}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</div>\r\n\r\n";

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var countries_service_1 = __webpack_require__(395);
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
	            //moduleId: module.id,
	            selector: 'countries',
	            template: __webpack_require__(396)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof countries_service_1.CountriesService !== 'undefined' && countries_service_1.CountriesService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], CountriesComponent);
	    return CountriesComponent;
	    var _a, _b;
	}());
	exports.CountriesComponent = CountriesComponent;


/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(62);
	__webpack_require__(85);
	__webpack_require__(87);
	var url_1 = __webpack_require__(86);
	var CountriesService = (function () {
	    function CountriesService(http, url) {
	        this.http = http;
	        this.url = url;
	    }
	    CountriesService.prototype.getCountries = function () {
	        return this.http.get(this.url.getURL() + 'countries')
	            .toPromise()
	            .then(function (response) { return response.json(); })
	            .catch(this.handleError);
	    };
	    CountriesService.prototype.getCountrie = function (id) {
	        return this.http
	            .get(this.url.getURL() + 'countrie' + '/' + id)
	            .map(function (res) { return res.json(); });
	    };
	    CountriesService.prototype.create = function (countrie) {
	        var body = JSON.stringify(countrie);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'countrie/add', body, options)
	            .map(function (res) { return res.json(); });
	    };
	    CountriesService.prototype.update = function (countrie) {
	        var body = JSON.stringify(countrie);
	        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Post });
	        return this.http
	            .post(this.url.getURL() + 'countrie/update', body, options)
	            .map(function (res) { return res.json(); });
	    };
	    CountriesService.prototype.handleError = function (error) {
	        console.error('An error occurred', error); // for demo purposes only
	        return Promise.reject(error.message || error);
	    };
	    CountriesService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], CountriesService);
	    return CountriesService;
	    var _a, _b;
	}());
	exports.CountriesService = CountriesService;


/***/ },

/***/ 396:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"sub-header\">{{subHeader}}</h2>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n       <tr>\r\n         <td >COUNTRY ID</td>\r\n         <td >COUNTRY NAME</td>\r\n         <td >REGION ID</td>\r\n       </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let countrie of countries\" (click)=\"showDetails(countrie)\">\r\n          <td >{{countrie.country_id}}</td>\r\n          <td >{{countrie.country_name}}</td>\r\n          <td >{{countrie.region_id}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</div>\r\n\r\n<create-button [link]=\"createNewCountrie\"></create-button>";

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var url_1 = __webpack_require__(86);
	var countries_service_1 = __webpack_require__(395);
	__webpack_require__(85);
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
	            //moduleId: module.id,
	            selector: 'countrie-detail',
	            template: __webpack_require__(398)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof countries_service_1.CountriesService !== 'undefined' && countries_service_1.CountriesService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object])
	    ], CountrieDetailComponent);
	    return CountrieDetailComponent;
	    var _a, _b, _c;
	}());
	exports.CountrieDetailComponent = CountrieDetailComponent;


/***/ },

/***/ 398:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div *ngIf=\"countrie\">\r\n    <table class=\"table\" style=\"width: 30%;\">\r\n        <tr>\r\n            <td>COUNTRY ID :</td>\r\n            <td>{{countrie.country_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>COUNTRIE TITLE :</td>\r\n            <td>{{countrie.country_name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>REGION ID :</td>\r\n            <td>{{countrie.region_id}}</td>\r\n        </tr>\r\n    </table>\r\n    <back-or-edit [id]=\"countrie.country_id\" [linkTo]=\"linkTo\" ></back-or-edit>\r\n</div>\r\n\r\n";

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(58);
	var countries_1 = __webpack_require__(400);
	var http_1 = __webpack_require__(62);
	var url_1 = __webpack_require__(86);
	var router_1 = __webpack_require__(66);
	var countries_service_1 = __webpack_require__(395);
	var CountrieFormComponent = (function () {
	    function CountrieFormComponent(countriesService, router, activatedRoute, url, http, formBuilder) {
	        this.countriesService = countriesService;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.url = url;
	        this.http = http;
	        this.formBuilder = formBuilder;
	    }
	    CountrieFormComponent.prototype.ngOnInit = function () {
	        this.initForm();
	        this.createOrUpdateFormInit();
	    };
	    CountrieFormComponent.prototype.initForm = function () {
	        this.registerForm = this.formBuilder.group({
	            country_id: '',
	            country_name: '',
	            region_id: ''
	        });
	    };
	    CountrieFormComponent.prototype.initEntity = function (countrie) {
	        this.countrie.country_name = countrie.country_name;
	        this.countrie.region_id = countrie.region_id;
	    };
	    CountrieFormComponent.prototype.save = function (countrie) {
	        this.initEntity(countrie);
	    };
	    CountrieFormComponent.prototype.create = function () {
	        this.countriesService
	            .create(this.countrie)
	            .subscribe(function (data) { return console.log(data); });
	        this.refresh();
	    };
	    CountrieFormComponent.prototype.update = function () {
	        this.countriesService
	            .update(this.countrie)
	            .subscribe(function (data) { return console.log(data); });
	        this.refresh();
	    };
	    CountrieFormComponent.prototype.refresh = function () {
	        this.http
	            .get(this.url.getURL() + 'countries')
	            .map(function (res) { return res.json(); })
	            .subscribe(function (data) { return console.log(data); });
	        this.router.navigate(['/countries']);
	    };
	    CountrieFormComponent.prototype.createOrUpdateFormInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('id', this.activatedRoute);
	        if (id === undefined || id === null) {
	            this.countrie = new countries_1.Countries();
	            this.isCreate = true;
	        }
	        else {
	            this.isUpdate = true;
	            this.countriesService
	                .getCountrie(id)
	                .subscribe(function (data) { return _this.countrie = data[0]; });
	        }
	    };
	    CountrieFormComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'countrie-form',
	            template: __webpack_require__(401)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof countries_service_1.CountriesService !== 'undefined' && countries_service_1.CountriesService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _d) || Object, (typeof (_e = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _e) || Object, (typeof (_f = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _f) || Object])
	    ], CountrieFormComponent);
	    return CountrieFormComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.CountrieFormComponent = CountrieFormComponent;


/***/ },

/***/ 400:
/***/ function(module, exports) {

	"use strict";
	var Countries = (function () {
	    function Countries() {
	    }
	    return Countries;
	}());
	exports.Countries = Countries;


/***/ },

/***/ 401:
/***/ function(module, exports) {

	module.exports = "<div style=\"width: 20%;\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"save(registerForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label>COUNTRY ID</label>\r\n            <input formControlName=\"country_id\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"country id (type string)\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>COUNTRY NAME</label>\r\n            <input formControlName=\"country_name\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"country name (type string)\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>REGION ID</label>\r\n            <input formControlName=\"region_id\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"region id (type string)\">\r\n        </div>\r\n        <button *ngIf=\"isCreate\" type=\"submit\" class=\"btn btn-success\">Create</button>\r\n        <button *ngIf=\"isUpdate\" type=\"submit\" class=\"btn btn-success\">Update</button>\r\n    </form>\r\n\r\n</div>";

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var url_1 = __webpack_require__(86);
	var employees_service_1 = __webpack_require__(389);
	var EmployeeDetailComponent = (function () {
	    function EmployeeDetailComponent(employeesService, activatedRoute, url) {
	        this.employeesService = employeesService;
	        this.activatedRoute = activatedRoute;
	        this.url = url;
	        this.subHeader = "Employee Details";
	    }
	    EmployeeDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('employee_id', this.activatedRoute);
	        this.employeesService.getEmployee(id)
	            .subscribe(function (data) { return _this.employee = data[0]; });
	    };
	    EmployeeDetailComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'employee-detail',
	            template: __webpack_require__(403)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof employees_service_1.EmployeesService !== 'undefined' && employees_service_1.EmployeesService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object])
	    ], EmployeeDetailComponent);
	    return EmployeeDetailComponent;
	    var _a, _b, _c;
	}());
	exports.EmployeeDetailComponent = EmployeeDetailComponent;


/***/ },

/***/ 403:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div *ngIf=\"employee\">\r\n    <table class=\"table\" style=\"width: 30%;\">\r\n        <tr>\r\n            <td>EMPLOYEE ID :</td>\r\n            <td>{{employee.employee_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>FIRST NAME :</td>\r\n            <td>{{employee.first_name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>LAST NAME :</td>\r\n            <td>{{employee.last_name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>EMAIL :</td>\r\n            <td>{{employee.email}}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>PHONE NUMBER :</td>\r\n            <td>{{employee.phone_number}}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>HIRE DATE :</td>\r\n            <td>{{employee.hire_date}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>JOB ID :</td>\r\n            <td>{{employee.job_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>SALARY :</td>\r\n            <td>{{employee.salary}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>COMMISSION PCT :</td>\r\n            <td>{{employee.commission_pct}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>MANAGER ID :</td>\r\n            <td>{{employee.manager_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>DEPARTMENT ID :</td>\r\n            <td>{{employee.department_id}}</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n";

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	__webpack_require__(87);
	var url_1 = __webpack_require__(86);
	var departments_service_1 = __webpack_require__(392);
	var DepartmentDetailComponent = (function () {
	    function DepartmentDetailComponent(departmentsService, activatedRoute, url) {
	        this.departmentsService = departmentsService;
	        this.activatedRoute = activatedRoute;
	        this.url = url;
	        this.subHeader = "Department Detail";
	    }
	    DepartmentDetailComponent.prototype.ngOnInit = function () {
	        this.displayDepartment();
	    };
	    DepartmentDetailComponent.prototype.displayDepartment = function () {
	        var _this = this;
	        var id = this.url.getParameter('department_id', this.activatedRoute);
	        this.departmentsService
	            .getDepartment(id)
	            .subscribe(function (department) {
	            _this.department = department[0];
	        });
	    };
	    DepartmentDetailComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'departament-detail',
	            template: __webpack_require__(405)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof departments_service_1.DepartmentsService !== 'undefined' && departments_service_1.DepartmentsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object])
	    ], DepartmentDetailComponent);
	    return DepartmentDetailComponent;
	    var _a, _b, _c;
	}());
	exports.DepartmentDetailComponent = DepartmentDetailComponent;


/***/ },

/***/ 405:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div *ngIf=\"department\">\r\n    <table class=\"table\" style=\"width: 30%;\">\r\n        <tr>\r\n            <td>DEPARTMENT_ID</td>\r\n            <td>{{department.department_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>DEPARTMENT_NAME</td>\r\n            <td>{{department.department_name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>MANAGER_ID</td>\r\n            <td>{{department.manager_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>LOCATION_ID</td>\r\n            <td>{{department.location_id}}</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n\r\n";

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
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
	            //moduleId: module.id,
	            selector: 'create-button',
	            template: "<button  class=\"btn btn-danger btn-circle\"\n                        style=\"position: fixed; bottom: 5%; right: 3%;\"\n                        (click)=\"createForm()\" > + </button>",
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
	    ], CreateButtonComponent);
	    return CreateButtonComponent;
	    var _a;
	}());
	exports.CreateButtonComponent = CreateButtonComponent;


/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var common_1 = __webpack_require__(22);
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
	            //moduleId: module.id,
	            selector: 'back-or-edit',
	            template: "<div class=\"row\">\n                    <div class=\"col-md-1\">\n                        <button class=\"btn btn-info\" (click)=\"goBack()\">Back</button>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button class=\"btn btn-success\" (click)=\"goToEdit()\">Edit</button>\n                    </div>\n                </div>",
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _b) || Object])
	    ], BackOrEditComponent);
	    return BackOrEditComponent;
	    var _a, _b;
	}());
	exports.BackOrEditComponent = BackOrEditComponent;


/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var person_service_1 = __webpack_require__(409);
	var router_1 = __webpack_require__(66);
	var PersonComponent = (function () {
	    function PersonComponent(personService, router) {
	        this.personService = personService;
	        this.router = router;
	        this.subHeader = 'Persons';
	        this.createNewPerson = 'person/add/form';
	    }
	    PersonComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.personService
	            .getPersons()
	            .subscribe(function (data) { return _this.persons = data; });
	    };
	    PersonComponent.prototype.showDetails = function (person) {
	        this.router.navigate(['/person', person.person_id]);
	    };
	    PersonComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'person',
	            template: __webpack_require__(410)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof person_service_1.PersonService !== 'undefined' && person_service_1.PersonService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], PersonComponent);
	    return PersonComponent;
	    var _a, _b;
	}());
	exports.PersonComponent = PersonComponent;


/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var url_1 = __webpack_require__(86);
	var http_1 = __webpack_require__(62);
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
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _b) || Object])
	    ], PersonService);
	    return PersonService;
	    var _a, _b;
	}());
	exports.PersonService = PersonService;


/***/ },

/***/ 410:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"sub-header\">{{subHeader}}</h2>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n        <tr>\r\n            <td >ID</td>\r\n            <td >NAME</td>\r\n            <td >LAST NAME</td>\r\n            <td >AGE</td>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let person of persons\" (dblclick)=\"showDetails(person)\">\r\n            <td >{{person.person_id}}</td>\r\n            <td >{{person.name}}</td>\r\n            <td >{{person.last_name}}</td>\r\n            <td >{{person.age}}</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<create-button [link]=\"createNewPerson\"></create-button>\r\n\r\n";

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(66);
	var person_service_1 = __webpack_require__(409);
	var url_1 = __webpack_require__(86);
	var PersonDetailComponent = (function () {
	    function PersonDetailComponent(activatedRoute, personservice, url) {
	        this.activatedRoute = activatedRoute;
	        this.personservice = personservice;
	        this.url = url;
	        this.linkTo = '/person/edit/form';
	    }
	    PersonDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var id = this.url.getParameter('person_id', this.activatedRoute);
	        this.personservice.getPerson(id).subscribe(function (data) { return _this.person = data[0]; });
	    };
	    PersonDetailComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'person-detail',
	            template: __webpack_require__(412)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof person_service_1.PersonService !== 'undefined' && person_service_1.PersonService) === 'function' && _b) || Object, (typeof (_c = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _c) || Object])
	    ], PersonDetailComponent);
	    return PersonDetailComponent;
	    var _a, _b, _c;
	}());
	exports.PersonDetailComponent = PersonDetailComponent;


/***/ },

/***/ 412:
/***/ function(module, exports) {

	module.exports = "<h2 >{{subHeader}}</h2>\r\n<div *ngIf=\"person\">\r\n\r\n    <table class=\"table\" style=\"width: 30%;\">\r\n        <tr>\r\n            <td>Person Id</td>\r\n            <td>{{person.person_id}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Name :</td>\r\n            <td>{{person.name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Last name :</td>\r\n            <td>{{person.last_name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Age :</td>\r\n            <td>{{person.age}}</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <back-or-edit [id]=\"person.person_id\" [linkTo]=\"linkTo\" ></back-or-edit>\r\n</div>\r\n\r\n\r\n";

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(58);
	var person_service_1 = __webpack_require__(409);
	var person_1 = __webpack_require__(414);
	var router_1 = __webpack_require__(66);
	var url_1 = __webpack_require__(86);
	var http_1 = __webpack_require__(62);
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
	            //moduleId: module.id,
	            selector: 'person-form',
	            template: __webpack_require__(415)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof person_service_1.PersonService !== 'undefined' && person_service_1.PersonService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, (typeof (_d = typeof url_1.Url !== 'undefined' && url_1.Url) === 'function' && _d) || Object, (typeof (_e = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _e) || Object, (typeof (_f = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _f) || Object])
	    ], PersonFormComponent);
	    return PersonFormComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.PersonFormComponent = PersonFormComponent;


/***/ },

/***/ 414:
/***/ function(module, exports) {

	"use strict";
	var Person = (function () {
	    function Person() {
	    }
	    return Person;
	}());
	exports.Person = Person;


/***/ },

/***/ 415:
/***/ function(module, exports) {

	module.exports = "<div style=\"width: 20%;\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"save(registerForm.value)\">\r\n        <input formControlName=\"person_id\" type=\"hidden\"/>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input formControlName=\"name\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input formControlName=\"last_name\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Last Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input formControlName=\"age\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Age\">\r\n        </div>\r\n        <button *ngIf=\"isCreate\" type=\"submit\" class=\"btn btn-success\">Create</button>\r\n    </form>\r\n\r\n</div>";

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var SidebarComponent = (function () {
	    function SidebarComponent() {
	    }
	    SidebarComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'sidebar',
	            template: __webpack_require__(417),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SidebarComponent);
	    return SidebarComponent;
	}());
	exports.SidebarComponent = SidebarComponent;


/***/ },

/***/ 417:
/***/ function(module, exports) {

	module.exports = "<ul class=\"nav nav-sidebar\">\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/employees\">Employees</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/countries\" >Countries</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/departments\">Departments</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/jobs\">Jobs</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/locations\">Locations</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/regions\">Regions</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/history\">History</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/persons\">Persons</a>\r\n  </li>\r\n</ul>";

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var TopNavbarComponent = (function () {
	    function TopNavbarComponent() {
	    }
	    TopNavbarComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'top-navbar',
	            template: __webpack_require__(419),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TopNavbarComponent);
	    return TopNavbarComponent;
	}());
	exports.TopNavbarComponent = TopNavbarComponent;


/***/ },

/***/ 419:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">HUMAN RESOURCES</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a href=\"#\">Dashboard</a></li>\r\n        <li><a href=\"#\">Settings</a></li>\r\n        <li><a href=\"#\">Profile</a></li>\r\n        <li><a href=\"#\">Help</a></li>\r\n      </ul>\r\n      <form class=\"navbar-form navbar-right\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\r\n      </form>\r\n    </div>\r\n  </div>\r\n</nav>";

/***/ }

});