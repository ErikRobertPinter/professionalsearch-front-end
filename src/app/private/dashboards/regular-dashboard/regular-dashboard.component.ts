import { Component } from '@angular/core';
import { ProfessionalListComponent } from '../tabs/professional-list/professional-list.component';

@Component({
  selector: 'app-regular-dashboard',
  standalone: true,
  imports: [ProfessionalListComponent],
  templateUrl: './regular-dashboard.component.html',
  styleUrl: './regular-dashboard.component.scss',
})
export class RegularDashboardComponent {}
