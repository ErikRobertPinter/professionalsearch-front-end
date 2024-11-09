import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  userProfile: FormGroup;
  constructor() {
    this.userProfile = new FormGroup({
      surname: new FormControl(''),
      firstname: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {}
}
