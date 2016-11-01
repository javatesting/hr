import {Component, OnInit}          from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {Url} from "../../../../url";
import {Jobs} from "../jobs";
import {JobsService} from "../jobs.service";
import { Location }               from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'job-detail',
  templateUrl: 'job-detail.component.html'
})
export class JobDetailComponent implements OnInit{
  subHeader = "Job Details";
  jobs: Jobs[];
  job: Jobs;
  
  linkTo = '/job/edit/form';

  constructor(
      private jobsService: JobsService,
      private activatedRoute: ActivatedRoute,
      private url: Url,
      private router: Router,
      private locationBack: Location) {
  }

  ngOnInit(): void {
    let id = this.url.getParameter('job_id', this.activatedRoute);
    this.jobsService.getJob(id)
        .subscribe(data => this.job = data[0]);
  }

}
