import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-dashboard',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.scss',
})
export class ProfessionalDashboardComponent {}
