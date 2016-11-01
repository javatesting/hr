

import {Component, OnInit} from "@angular/core";
import {Jobs} from "../jobs";
import {Router, ActivatedRoute} from "@angular/router";
import {Url} from "../../../../url";
import {Http} from "@angular/http";
import {JobsService} from "../jobs.service";
@Component({
    moduleId: module.id,
    selector: 'job-form',
    templateUrl: 'job-form.component.html'
})
export class JobFormComponent implements OnInit{
    subHeader = "Job Form";
    isCreate: boolean;
    isUpdate: boolean;
    job: Jobs;
    
    constructor( 
                 private router: Router,
                 private activatedRoute: ActivatedRoute,
                 private url: Url,
                 private http: Http,
                 private jobsService: JobsService) {}

    ngOnInit(): void {
        console.log('Job Form');
        this.createOrUpdateFormInit();
    }


    create(): void {
        this.jobsService
            .create(this.job)
            .subscribe(data => console.log(data));
        this.refresh();
    }

    update(): void {
        this.jobsService
            .update(this.job)
            .subscribe(data => console.log(data));
        this.refresh();
    }

    
    private refresh(): void {
        this.http
            .get(this.url.getURL() + 'jobs')
            .map(res => <Jobs[]> res.json())
            .subscribe(data => console.log(data));
        this.router.navigate(['/jobs']);
    }

    private createOrUpdateFormInit(): void {
        let id = this.url.getParameter('id', this.activatedRoute);
        if(id === undefined || id === null) {
            this.job = new Jobs();
            this.isCreate = true;
        } else {
            this.isUpdate = true;
            this.jobsService
                .getJob(id)
                .subscribe(data => this.job = data[0]);
        }
    }
}