import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Users } from '../../private/user-list/user-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-deletion-confirmation',
  imports: [],
  templateUrl: './user-deletion-confirmation.component.html',
  styleUrl: './user-deletion-confirmation.component.scss',
})
export class UserDeletionConfirmationComponent {
  @Output() userDeleted = new EventEmitter<void>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Users, // A data tartalmazza a felhasználói adatokat
    private dialogRef: MatDialogRef<UserDeletionConfirmationComponent>,
    private http: HttpClient
  ) {}
  deleteUser() {
    const url = `http://localhost:8000/api/deleteuser/${this.data.id}`;
    this.http.delete(url).subscribe({
      next: () => {
        console.log('Successfully deleted user.');
        this.dialogRef.close(true);
        this.userDeleted.emit();
      },
      error: (err) => {
        console.log('Something went wrong with deletion.');
      },
    });
  }
  close() {
    this.dialogRef.close();
  }
}
