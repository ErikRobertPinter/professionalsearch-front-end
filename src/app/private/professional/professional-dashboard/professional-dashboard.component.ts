import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-dashboard',
  imports: [],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.scss',
})
export class ProfessionalDashboardComponent {
  /*list: any[] = [];
  constructor(private http: HttpClient) {}
  userid: any = localStorage.getItem('userId');

  ngOnInit(): void {
    this.http
      .get<any[]>(`http://127.0.0.1:8000/api/jobs/${this.userid}`)
      .subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
  }*/
}
