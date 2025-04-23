import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfessionalListComponent } from '../tabs/professional-list/professional-list.component';
import { JobStatisticsComponent } from '../tabs/job-statistics/job-statistics.component';
import { AdminStatisticsComponent } from '../tabs/admin-statistics/admin-statistics.component';

@Component({
  selector: 'app-admin-professional-dashboard',
  standalone: true,
  imports: [
    MatTabsModule,
    ProfessionalListComponent,
    JobStatisticsComponent,
    AdminStatisticsComponent,
  ],
  templateUrl: './admin-professional-dashboard.component.html',
  styleUrl: './admin-professional-dashboard.component.scss',
})
export class AdminProfessionalDashboardComponent {}
