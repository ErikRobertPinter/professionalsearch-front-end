import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfessionalSignupFormComponent } from '../SignupForms/professional-signup-form/professional-signup-form.component';
import { UserSignupFormComponent } from '../SignupForms/user-signup-form/user-signup-form.component';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    MatTabsModule,
    ProfessionalSignupFormComponent,
    UserSignupFormComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
