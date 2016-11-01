import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }         from './human-resources/root.component';
import { routing }              from './app.routing';
import {Url} from "./url";
import {SidebarComponent} from "./human-resources/sidebar/sidebar.component";
import {TopNavbarComponent} from "./human-resources/top-navbar/top-navbar.component";

import {RegionsService, LocationsService,
        JobsService, HistoryService,
        EmployeesService, DepartmentsService,
        CountriesService, PersonService
  } from './human-resources/components/index';
import {RegionsComponent, LocationsComponent, JobsComponent, HistoryComponent,
        EmployeesComponent, DepartmentsComponent, CountriesComponent,
        EmployeeDetailComponent, DepartmentDetailComponent, RegionDetailComponent,
        JobDetailComponent,CountrieDetailComponent,RegionFormComponent,
        CreateButtonComponent, LocationDetailComponent, LocationFormComponent,
        JobFormComponent, BackOrEditComponent,PersonComponent
  } from './human-resources/components/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    CountriesComponent,
    CountrieDetailComponent,
    DepartmentsComponent,
    DepartmentDetailComponent,
    JobsComponent,
    JobFormComponent,
    JobDetailComponent,
    HistoryComponent,
    RegionsComponent,
    RegionDetailComponent,
    RegionFormComponent,
    LocationsComponent,
    LocationDetailComponent,
    LocationFormComponent,
    SidebarComponent,
    TopNavbarComponent,
    CreateButtonComponent,
    BackOrEditComponent,
    PersonComponent
  ],
  providers: [
    EmployeesService,
    CountriesService,
    DepartmentsService,
    JobsService,
    LocationsService,
    RegionsService,
    HistoryService,  
    Url,
    PersonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
