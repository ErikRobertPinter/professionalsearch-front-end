import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const pagedetails = { pagename: 'Contact' };
    this.http
      .post('http://127.0.0.1:8000/api/addpageview', pagedetails)
      .subscribe();
  }
}
