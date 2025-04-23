import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AddJobComponent } from '../jobs/add-job/add-job.component';
import { JobListComponent } from '../jobs/job-list/job-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myjob',
  standalone: true,
  imports: [CommonModule, MatTabsModule, AddJobComponent, JobListComponent],
  templateUrl: './myjob.component.html',
  styleUrl: './myjob.component.scss',
})
export class MyjobComponent {}
