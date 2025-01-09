import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfessionalSignupFormComponent } from '../SignupForms/professional-signup-form/professional-signup-form.component';
import { UserSignupFormComponent } from '../SignupForms/user-signup-form/user-signup-form.component';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatTabsModule,
    ProfessionalSignupFormComponent,
    UserSignupFormComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
