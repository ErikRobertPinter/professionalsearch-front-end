import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../dashboards/admin-dashboard/admin-dashboard.component';
import { AdminProfessionalDashboardComponent } from '../dashboards/admin-professional-dashboard/admin-professional-dashboard.component';
import { ProfessionalDashboardComponent } from '../dashboards/professional-dashboard/professional-dashboard.component';
import { RegularDashboardComponent } from '../dashboards/regular-dashboard/regular-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AdminDashboardComponent,
    AdminProfessionalDashboardComponent,
    ProfessionalDashboardComponent,
    RegularDashboardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userType: string = '';
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType') ?? '';
  }
}
