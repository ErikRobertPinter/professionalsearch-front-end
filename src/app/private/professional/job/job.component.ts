import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AddJobComponent } from '../jobs/add-job/add-job.component';
import { JobListComponent } from '../jobs/job-list/job-list.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [AddJobComponent, JobListComponent, MatTabsModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
})
export class JobComponent {}
