import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { MatLabel } from '@angular/material/input';
import { AddNewProfessionComponent } from '../add-new-profession/add-new-profession.component';

interface User {
  surname: string;
  firstname: string;
  email: string;
  phoneNumber: string;
}
interface Professions {
  surname: string;
  firstname: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  //professions: [] = [];
  userId = localStorage.getItem('userId');
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  readonly panelOpenState = signal(false);
  professions = [
    {
      id: 1,
      title: 'Gazdaságinformatikus Bsc',
      training_center_name: 'University of Pannonia',
      description: '2019-től 2025-ig itt végeztem el a Gagrkgn....',
    },
    {
      id: 2,
      title: 'aoigninewg',
      description: '',
    },
    {
      id: 3,
      title: 'mgeihgnein eng oien g',
      description: '',
    },
    {
      id: 4,
      title: 'valami más is itt',
      description: '',
    },
  ];

  ngOnInit(): void {
    const pagedetails = { pagename: 'profile' };
    this.http
      .post('http://127.0.0.1:8000/api/addpageview', pagedetails)
      .subscribe();
    this.http
      .get<User>(`http://127.0.0.1:8000/api/user/${this.userId}`)
      .subscribe((data) => {
        this.user = data;
        console.log(this.user);
        this.profileForm.patchValue({
          surname: this.user.surname,
          firstname: this.user.firstname,
          email: this.user.email,
          phoneNumber: this.user.phoneNumber,
        });
        this.http
          .get(`http://127.0.0.1:8000/api/professions/${this.userId}`)
          .subscribe();
      });
  }

  profileForm = new FormGroup({
    surname: new FormControl(),
    firstname: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    password: new FormControl(''),
  });

  updateProfile() {
    console.log(this.profileForm.value);
  }
  addNewProfession() {
    const dialog = this.dialog.open(AddNewProfessionComponent, {
      width: '40%',
      height: '40vh',
    });
  }
}
