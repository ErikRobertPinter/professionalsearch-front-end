import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  list: any[] = [];
  constructor(private http: HttpClient) {}
  userId: number = 3;

  dafg() {
    this.http
      .get<any[]>(`http://127.0.0.1:8000/api/jobs/${this.userId}`)
      .subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
  }
}
