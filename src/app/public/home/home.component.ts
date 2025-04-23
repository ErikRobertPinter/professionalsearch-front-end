import { Component } from '@angular/core';
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
}
