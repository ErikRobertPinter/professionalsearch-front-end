import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent {
  api = 'http://127.0.0.1:8000/api/logout';
  constructor(private http: HttpClient, private router: Router) {}
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
