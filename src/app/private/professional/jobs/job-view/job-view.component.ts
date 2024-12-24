import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

interface Job {
  id: number;
  title: string;
  address: string;
  customer: string;
  income: number;
  cost: number;
}
@Component({
  selector: 'app-job-view',
  standalone: true,
  imports: [],
  templateUrl: './job-view.component.html',
  styleUrl: './job-view.component.scss',
})
export class JobViewComponent implements OnInit {
  title: string = '';
  address: string = '';
  customer: string = '';
  income: number = 0;
  cost: number = 0;
  productId: string | null = null;
  jobsList: Job[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.http
        .get<Job[]>('http://127.0.0.1:8000/api/listJobs')
        .pipe(
          map((data) => data.filter((job) => job.id == Number(this.productId)))
        )
        .subscribe((filteredJobs) => {
          this.jobsList = filteredJobs;
          if (this.jobsList.length > 0) {
            const job = this.jobsList[0];
            this.title = job.title;
            this.address = job.address;
            this.customer = job.customer;
            this.income = job.income;
            this.cost = job.cost;
          }
        });
    });
  }
}
