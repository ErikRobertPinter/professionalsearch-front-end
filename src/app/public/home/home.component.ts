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
  registratedUser: number = 1500; // A célérték a regisztrált felhasználókra
  jobsDone: number = 45972;
  //targetValue: number = 1500; // A célérték
  duration: number = 2000; // Időtartam (ms)
  registratedUserCounter: HTMLElement | null = null;
  jobsDoneCounter: HTMLElement | null = null;

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

  ngAfterViewInit(): void {
    this.registratedUserCounter = document.getElementById(
      'registratedUserCounter'
    );
    if (this.registratedUserCounter) {
      this.animateRegistratedUserCounter();
    }
    this.jobsDoneCounter = document.getElementById('jobsDoneCounter');
    if (this.jobsDoneCounter) {
      this.animateJobsDoneCounter();
    }
  }
  // Az animációs logika
  private animateRegistratedUserCounter(): void {
    let start: number | null = null;
    const animate = (timestamp: number): void => {
      if (!start) start = timestamp;
      const progress: number = timestamp - start;
      const current: number = Math.min(
        Math.floor((progress / this.duration) * this.registratedUser),
        this.registratedUser
      );
      if (this.registratedUserCounter) {
        this.registratedUserCounter.textContent = current.toLocaleString(); // 👈 Ezzel szépen formázott szám lesz
      }
      if (current < this.registratedUser) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
  private animateJobsDoneCounter(): void {
    let start: number | null = null;
    const animate = (timestamp: number): void => {
      if (!start) start = timestamp;
      const progress: number = timestamp - start;
      const current: number = Math.min(
        Math.floor((progress / this.duration) * this.jobsDone),
        this.jobsDone
      );
      if (this.jobsDoneCounter) {
        this.jobsDoneCounter.textContent = current.toLocaleString(); // 👈 Ezzel szépen formázott szám lesz
      }
      if (current < this.jobsDone) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
}
