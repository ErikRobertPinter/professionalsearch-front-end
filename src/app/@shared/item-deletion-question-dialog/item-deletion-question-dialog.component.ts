import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-item-deletion-question-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './item-deletion-question-dialog.component.html',
  styleUrl: './item-deletion-question-dialog.component.scss',
})
export class ItemDeletionQuestionDialogComponent {
  constructor(private dialog: DialogRef<ItemDeletionQuestionDialogComponent>) {}

  close() {
    this.dialog.close();
  }
  deleteItem() {
    this.dialog.close();
  }
}
