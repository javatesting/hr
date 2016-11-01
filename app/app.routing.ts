import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegionsComponent, LocationsComponent, JobsComponent, HistoryComponent,
    EmployeesComponent, DepartmentsComponent, CountriesComponent,
    EmployeeDetailComponent,DepartmentDetailComponent,RegionDetailComponent,
    JobDetailComponent,CountrieDetailComponent, RegionFormComponent,
    LocationDetailComponent,LocationFormComponent,JobFormComponent,
    PersonComponent
} from './human-resources/components/index';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: 'employees', component: EmployeesComponent
  },
  {
    path: 'employee/:employee_id', component: EmployeeDetailComponent
  },
  {
    path: 'countries', component: CountriesComponent
  },
  {
    path: 'country/:country_id', component: CountrieDetailComponent
  },
  {
    path: 'departments', component: DepartmentsComponent
  },
  {
    path: 'department/:department_id', component: DepartmentDetailComponent
  },
  {
    path: 'jobs', component: JobsComponent
  },
  {
    path: 'job/:job_id', component: JobDetailComponent
  },
  {
    path: 'job/add/form', component: JobFormComponent
  },
  {
    path: 'job/edit/form', component: JobFormComponent
  },
  {
    path: 'locations', component: LocationsComponent
  },
  {
    path: 'location/:location_id', component: LocationDetailComponent
  },
  {
    path: 'location/add/form', component: LocationFormComponent
  },
  {
    path: 'location/edit/form', component: LocationFormComponent
  },
  {
    path: 'regions', component: RegionsComponent
  },
  {
    path: 'region/:region_id', component: RegionDetailComponent
  },
  {
    path: 'region/add/form', component: RegionFormComponent
  },
  {
    path: 'region/edit/form', component: RegionFormComponent
  },
  {
    path: 'history', component: HistoryComponent
  },
  {
    path: 'persons', component: PersonComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);