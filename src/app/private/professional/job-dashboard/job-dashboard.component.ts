import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AddJobComponent } from '../job/add-job/add-job.component';
import { JobListComponent } from '../job/job-list/job-list.component';

@Component({
  selector: 'app-job-dashboard',
  imports: [MatTabsModule, AddJobComponent, JobListComponent],
  templateUrl: './job-dashboard.component.html',
  styleUrl: './job-dashboard.component.scss',
})
export class JobDashboardComponent {}
