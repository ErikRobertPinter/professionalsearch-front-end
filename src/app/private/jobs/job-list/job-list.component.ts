import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent {
  jobs: any[] = [];
  constructor(private http: HttpClient) {}
  userid: any = localStorage.getItem('userId');

  ngOnInit(): void {
    this.http
      .get<any[]>(`http://127.0.0.1:8000/api/jobs/${this.userid}`)
      .subscribe((data) => {
        this.jobs = data;
        console.log(this.jobs);
      });
  }
}
