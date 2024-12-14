import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.scss',
})
export class ProfessionalDashboardComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const pagedetails = { pagename: 'Professional-dashboard' };
    this.http
      .post('http://127.0.0.1:8000/api/addpageview', pagedetails)
      .subscribe();
  }
}
