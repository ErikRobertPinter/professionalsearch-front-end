import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-professional-signup-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './professional-signup-form.component.html',
  styleUrl: './professional-signup-form.component.scss',
})
export class ProfessionalSignupFormComponent implements OnInit {
  professionalSignup!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.professionalSignup = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required]],

      // Oktatás (több elem is lehet)
      education: this.fb.array([this.createEducationGroup()]),

      // Munkaárlista
      services: this.fb.array([this.createServiceGroup()]),
    });
  }

  get education(): FormArray {
    return this.professionalSignup.get('education') as FormArray;
  }

  get services(): FormArray {
    return this.professionalSignup.get('services') as FormArray;
  }

  createEducationGroup(): FormGroup {
    return this.fb.group({
      year_from: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      month_from: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)],
      ],
      year_to: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      month_to: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)],
      ],
      institution: ['', Validators.required],
      profession: ['', Validators.required],
    });
  }

  addEducation(): void {
    this.education.push(this.createEducationGroup());
  }

  removeEducation(index: number): void {
    this.education.removeAt(index);
  }

  createServiceGroup(): FormGroup {
    return this.fb.group({
      workType: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  addService(): void {
    this.services.push(this.createServiceGroup());
  }

  removeService(index: number): void {
    this.services.removeAt(index);
  }

  onSubmit(): void {
    if (this.professionalSignup.valid) {
      console.log(this.professionalSignup.value);
      this.http
        .post(
          'http://127.0.0.1:8000/api/professionalsignup',
          this.professionalSignup.value
        )
        .subscribe();
    } else {
      this.professionalSignup.markAllAsTouched();
    }
  }
  /*professionalProfile: FormGroup;
  constructor(private fb: FormBuilder) {
    this.professionalProfile = this.fb.group({
      surname: new FormControl('', [Validators.required]),
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
  }*/
}
