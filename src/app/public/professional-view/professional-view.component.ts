import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Professional {
  id: number;
  surname: string;
  firstname: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-professional-view',
  imports: [],
  templateUrl: './professional-view.component.html',
  styleUrl: './professional-view.component.scss',
})
export class ProfessionalViewComponent implements OnInit {
  professional!: Professional;
  /*surname: string = 'Pintér';
  firstname: string = 'Erik Róbert';
  emailAddress: string = 'erikrobert.pinter@stormarketingroup.com';
  phoneNumber: string = '06-20/443-9867';*/
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.http
      .get<Professional>(`http://127.0.0.1:8000/api/user/${userId}`)
      .subscribe((data) => {
        this.professional = data;
      });
  }
}
