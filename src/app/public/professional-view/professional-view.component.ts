import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './professional-view.component.html',
  styleUrl: './professional-view.component.scss',
})
export class ProfessionalViewComponent implements OnInit {
  professional_id: number = 0;
  professional!: Professional;

  giveOpinion = new FormGroup({
    opinion: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.professional_id = Number(this.route.snapshot.paramMap.get('id'));
    this.http
      .get<Professional>(
        `http://127.0.0.1:8000/api/user/${this.professional_id}`
      )
      .subscribe((data) => {
        this.professional = data;
      });
  }

  addOpinion(): void {
    const user_id = localStorage.getItem('userId');
    const payLoad = {
      user_id: Number(user_id),
      professional_id: this.professional_id,
      description: this.giveOpinion.value.opinion,
    };
    this.http.post('http://127.0.0.1:8000/api/addrating', payLoad).subscribe();
  }
}
