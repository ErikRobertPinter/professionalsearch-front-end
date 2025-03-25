import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-user-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-signup-form.component.html',
  styleUrl: './user-signup-form.component.scss',
})
export class UserSignupFormComponent {
  userProfile = new FormGroup({
    surname: new FormControl(''),
    firstname: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
  });
}
