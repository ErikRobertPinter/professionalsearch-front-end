import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Professional {
  id: number;
  surname: string;
  firstname: string;
}

@Component({
  selector: 'app-user-dashboard',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
})
export class UserDashboardComponent {
  professionals: Professional[] = [];
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      settlement: [''],
      profession: [''],
    });
  }

  search() {
    const params = new HttpParams()
      .set('settlement', this.searchForm.get('settlement')?.value || '')
      .set('profession', this.searchForm.get('profession')?.value || '');

    this.http
      .get<Professional[]>('http://127.0.0.1:8000/api/skills', { params })
      .subscribe((response) => {
        this.professionals = response;
      });
  }
}
