import { Component } from '@angular/core';
import { ProfessionalParamsServiceService } from '../../@shared/professional-params-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      settlement: [''],
      profession: [''],
    });
  }

  search() {
    const { settlement, profession } = this.searchForm.value;
    this.router.navigate(['/professional-list'], {
      queryParams: { settlement, profession },
    });
  }
  /*searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      settlement: [''],
      profession: [''],
    });
  }*/
  /*list: any[] = [];
  constructor(private http: HttpClient) {}
  userId: number = 3;*/
  /*dafg() {
    this.http
      .get<any[]>(`http://127.0.0.1:8000/api/jobs/${this.userId}`)
      .subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
  }*/
  /*search() {
    const { settlement, profession } = this.searchForm.value;
    this.router.navigate(['/professional-list'], {
      queryParams: { settlement, profession },
    });
  }*/
}
