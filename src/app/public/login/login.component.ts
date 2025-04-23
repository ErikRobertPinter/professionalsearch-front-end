import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink],
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
  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    this.http
      .post('http://127.0.0.1:8000/api/login', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.token) {
            localStorage.setItem('auth_token', response.token);
            localStorage.setItem('userId', response.user.id);
            localStorage.setItem('userType', response.user.role);
            let token = localStorage.getItem('auth_token');
            let userId = localStorage.getItem('userId');
            console.log(token);
            console.log(userId);
            this.router.navigate(['/dashboard']);
          }
        },
      });
  }
}
