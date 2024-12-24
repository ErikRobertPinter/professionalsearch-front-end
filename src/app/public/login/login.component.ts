import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    const pagedetails = { pagename: 'Login' };
    this.http
      .post('http://127.0.0.1:8000/api/addpageview', pagedetails)
      .subscribe();
  }

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  userType: string = 'professional';
  userToken: string = '';
  constructor(private router: Router, private http: HttpClient) {}

  /*onSubmit() {
    console.log(this.loginForm.value);
  }*/
  onSubmit() {
    this.http
      .post('http://127.0.0.1:8000/api/login', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.token) {
            localStorage.setItem('auth_token', response.token);
            let token = localStorage.getItem('auth_token');
            console.log(token);
          }
          if (response) {
            console.log(response);
          }

          switch (response.user.roles[0]) {
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
    /*switch (this.userType) {
      case 'user': {
        //localStorage.setItem('userType', this.userType);
        //localStorage.setItem('userToken', this.userToken);
        this.router.navigate(['/user-dashboard']);
        break;
      }
      case 'professional': {
        //localStorage.setItem('userType', this.userType);
        //localStorage.setItem('userToken', this.userToken);
        this.router.navigate(['/professional-dashboard']);
        break;
      }
      case 'admin': {
        //localStorage.setItem('userType', this.userType);
        //localStorage.setItem('userToken', this.userToken);
        this.router.navigate(['/admin-dashboard']);
        break;
      }
      default: {
        //localStorage.setItem('userType', this.userType);
        //localStorage.setItem('userToken', this.userToken);
        this.router.navigate(['/professional-dashboard']);
        break;
      }
    }*/
  }
}
