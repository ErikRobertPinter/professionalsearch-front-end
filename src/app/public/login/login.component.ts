import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private subscription!: Subscription;
  ngOnInit(): void {
    const pagedetails = { pagename: 'Login' };
    this.subscription = this.http
      .post('http://127.0.0.1:8000/api/addpageview', pagedetails)
      .subscribe();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  userType: string = 'professional';
  userToken: string = '';
  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    this.http
      .post('http://127.0.0.1:8000/api/login', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.token) {
            localStorage.setItem('auth_token', response.token);
            localStorage.setItem('userId', response.user.id);
            let token = localStorage.getItem('auth_token');
            let userId = localStorage.getItem('userId');
            console.log(token);
            console.log(userId);
          }
          if (response) {
            console.log(response);
          }

          switch (response.user.roles) {
            case 'professional':
              console.log('Szakember felhasználó!');
              this.router.navigate(['/professional-dashboard']);
              break;
            case 'user':
              console.log('Szakember felhasználó!');
              this.router.navigate(['/user-dashboard']);
              break;
            case 'admin':
              console.log('Szakember felhasználó!');
              this.router.navigate(['/admin-dashboard']);
              break;
            default:
              console.log('ismeretlen felhasználói típus');
              this.router.navigate(['/default-dashboard']);
          }
        },
      });
  }
}
