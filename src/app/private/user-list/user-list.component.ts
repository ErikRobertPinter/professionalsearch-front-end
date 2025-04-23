import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { UserDeletionConfirmationComponent } from '../../@shared/user-deletion-confirmation/user-deletion-confirmation.component';

export interface Users {
  id: string;
  surname: string;
  firstname: string;
  email: string;
  isAdmin: string;
  isProfessional: string;
}
@Component({
  selector: 'app-user-list',
  imports: [MatDialogModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: Users[] = [];
  constructor(private http: HttpClient, private dialogRef: MatDialog) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.http.get<Users[]>('http://127.0.0.1:8000/api/getUsers').subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.log('An error occurred: ', error);
      }
    );
  }

  deleteUser(id: string) {
    const userId: number = parseInt(id);
    const userDetails = this.users.find((user) => user.id === id);
    if (userDetails) {
      const dialogRef = this.dialogRef.open(UserDeletionConfirmationComponent, {
        width: '40%',
        height: '30vh',
        data: userDetails,
      });

      dialogRef.componentInstance.userDeleted.subscribe(() => {
        this.loadUsers();
      });
    }
  }
}
