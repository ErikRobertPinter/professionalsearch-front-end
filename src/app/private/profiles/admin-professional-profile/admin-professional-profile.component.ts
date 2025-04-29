import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-professional-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-professional-profile.component.html',
  styleUrl: './admin-professional-profile.component.scss',
})
export class AdminProfessionalProfileComponent {
  addNewPracticeArea = new FormGroup({
    practiceAreaName: new FormControl(''),
  });
}
