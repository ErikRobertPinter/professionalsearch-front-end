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
    //this.http.post('http://127.0.0.1:8000/api/login');
    switch (this.userType) {
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
    }
  }
}
