import {Component, OnInit}          from '@angular/core';
import {Router} from "@angular/router";
import {Jobs} from "./jobs";
import {JobsService} from "./jobs.service";

@Component({
  moduleId: module.id,
  selector: 'jobs',
  templateUrl: 'jobs.component.html'
})
export class JobsComponent{
  subHeader = "Jobs";
  jobs: Jobs[];
  createNewJob = 'job/add/form';
  constructor(
      private jobsService: JobsService, private router: Router) {
      this.getJobs();
  }

  getJobs(): void {
    this.jobsService
        .getJobs()
        .then(jobs => this.jobs = jobs);
  }

  showDetails(job: Jobs): void {
    this.router.navigate(['/job', job.job_id]);
  }
}
