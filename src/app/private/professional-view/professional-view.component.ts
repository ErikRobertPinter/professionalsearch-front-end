import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Professional {
  id: number;
  surname: string;
  firstname: string;
  email: string;
  phoneNumber: string;
}
@Component({
  selector: 'app-professional-view',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './professional-view.component.html',
  styleUrl: './professional-view.component.scss',
})
export class ProfessionalViewComponent implements OnInit {
  professional_id: number = 0;
  professional: Professional | null = null;
  userid: number = 0;
  asdfg: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  giveOpinion = new FormGroup({
    opinion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.professional_id = +id;
      }
      this.http
        .get<Professional>(`http://127.0.0.1:8000/api/user/${id}`)
        .subscribe((datas) => {
          console.log(datas);
          this.professional = datas;
        });
      if (id) {
        this.userid = +id;
      }
      console.log(id);
    });
  }
  addOpinion(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Access: 'application/json',
    });
    const user_id = localStorage.getItem('userId');
    const payLoad = {
      user_id: user_id,
      professional_id: this.professional_id,
      description: this.giveOpinion.value.opinion,
    };
    this.http
      .post('http://127.0.0.1:8000/api/addrating', payLoad, { headers })
      .subscribe();
  }
}
