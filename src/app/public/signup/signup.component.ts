import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { UserSignupFormComponent } from '../SignupForms/user-signup-form/user-signup-form.component';
import { ProfessionalSignupFormComponent } from '../SignupForms/professional-signup-form/professional-signup-form.component';

@Component({
  selector: 'app-signup',
  imports: [
    MatTabsModule,
    UserSignupFormComponent,
    ProfessionalSignupFormComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
