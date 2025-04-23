import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-added-successfully',
  imports: [],
  templateUrl: './job-added-successfully.component.html',
  styleUrl: './job-added-successfully.component.scss',
})
export class JobAddedSuccessfullyComponent {
  constructor(private router: Router) {}
  homepage() {
    this.router.navigate(['/dashboard']);
  }
  addNewJob() {
    this.router.navigate(['/myjobs']);
  }
}
