import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.scss',
})
export class AddJobComponent {
  constructor(private http: HttpClient) {}
  addJobForm = new FormGroup({
    title: new FormControl(''),
    address: new FormControl(''),
    customer: new FormControl(''),
    income: new FormControl(''),
    cost: new FormControl(''),
  });
  addJob() {
    this.http
      .post('http://127.0.0.1:8000/api/addJob', this.addJobForm.value)
      .subscribe({
        next: (response) => {
          console.log('Successful response:', response);
        },
        error: (err) => {
          console.error('An error occurred:', err);
        },
      });
    location.reload();
    //console.log(this.addJobForm.value);
  }
}
