import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.scss',
})
export class AddJobComponent {
  addJob: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.addJob = this.fb.group({
      title: new FormControl(),
      image: null,
      address: new FormControl(),
      customer: new FormControl(),
      income: new FormControl(),
      cost: new FormControl(),
    });
  }

  uploadFile(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.addJob.patchValue({ image: file });
  }

  saveJob() {
    const userId = localStorage.getItem('userId');
    const jobData = { ...this.addJob.value, userId };
    //console.log(jobData);
    this.http.post('http://127.0.0.1:8000/api/addJob', jobData).subscribe({
      next: (response: any) => {
        this.router.navigate(['/job-added-successfully']);
      },
      error: (err) => {
        console.error('Hiba a munkák mentése során:', err);

        // Itt például megjeleníthetsz egy felugró hibát vagy egy hibás státuszt:
        alert('Hiba történt a mentés közben!');

        // Vagy logolhatod részletesebben:
        if (err.status === 422) {
          console.log('Validációs hiba:', err.error.errors);
        } else if (err.status === 500) {
          console.log('Szerverhiba:', err.message);
        }
      },
    });
  }
}
