import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './professional-signup-form.component.html',
  styleUrl: './professional-signup-form.component.scss',
})
export class ProfessionalSignupFormComponent {
  professionalProfile: FormGroup;
  constructor(private fb: FormBuilder) {
    this.professionalProfile = this.fb.group({
      surname: new FormControl(''),
      firstname: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      password: new FormControl(''),
      skills: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addSkill();
  }

  // Getter a skills FormArray-hoz
  get skills(): FormArray {
    return this.professionalProfile.get('skills') as FormArray;
  }

  // Új skill hozzáadása
  addSkill(): void {
    const skillControl = this.fb.control('', Validators.required); // Validáció opcionális
    this.skills.push(skillControl);
  }

  // Skill eltávolítása index alapján
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  // Adatok beküldése
  onSubmit(): void {
    console.log(this.professionalProfile.value);
  }
}
