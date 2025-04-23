import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  imports: [CommonModule],
  templateUrl: './professional-view.component.html',
  styleUrl: './professional-view.component.scss',
})
export class ProfessionalViewComponent implements OnInit {
  professional: Professional | null = null;
  userid: number = 0;
  constructor(private route: ActivatedRoute, private router: HttpClient) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.router
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
}
