import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss',
})
export class PrivateLayoutComponent implements OnInit {
  userType: string = '';
  api = 'http://127.0.0.1:8000/api/logout';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType') ?? '';
  }

  logout() {
    const token = localStorage.getItem('auth_token');

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Access: 'application/json',
      Authorization: `Bearer ${token}`,
    });
    this.http.get(this.api, { headers: header }).subscribe({
      next: (response: any) => {
        if (token) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('userId');
          localStorage.removeItem('userType');
          console.log('Successfully logged out.');
        } else {
          console.log('Error, there is no token available.');
        }
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Hiba a logout során:', error);
      },
    });
  }
}
