import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-signup-form.component.html',
  styleUrl: './user-signup-form.component.scss',
})
export class UserSignupFormComponent {
  constructor(private http: HttpClient) {}
  userProfile = new FormGroup({
    surname: new FormControl(''),
    firstname: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Access: 'application/json', // ha szükséges
    });
    console.log(this.userProfile.value);
    this.http
      .post('http://127.0.0.1:8000/api/register', this.userProfile.value, {
        headers,
      })
      .subscribe({
        next: (res) => {
          console.log('Regisztráció sikeres!', res);
          // esetleg irányítás pl. this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Hiba történt:', err);
          // mutathatsz errort a felhasználónak
        },
      });
  }
}
