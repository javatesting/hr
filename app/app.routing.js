"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./human-resources/components/index');
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
//# sourceMappingURL=app.routing.js.map