import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const pagedetails = { pagename: 'Home' };
    this.http
      .post('http://127.0.0.1:8000/api/addpageview', pagedetails)
      .subscribe();
  }
}
