import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ItemDeletionQuestionDialogComponent } from '../../../../@shared/item-deletion-question-dialog/item-deletion-question-dialog.component';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs';
import { RouterLink } from '@angular/router';

interface Job {
  id: number;
  title: string;
  address: string;
  customer: string;
  income: number;
  cost: number;
}
@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [RouterLink, MatDialogModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent {
  jobsList: Job[] = [];
  constructor(private deletedialog: MatDialog, private http: HttpClient) {
    this.http
      .get<Job[]>('http://127.0.0.1:8000/api/listJobs')
      .pipe(map((data) => data.filter((job) => job.income > 50000)))
      .subscribe((filteredJobs) => {
        this.jobsList = filteredJobs;
      });
  }

  opendeletiondialog() {
    this.deletedialog.open(ItemDeletionQuestionDialogComponent, {
      width: '50%',
      height: '30vh',
    });
  }
}
