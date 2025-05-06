import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contact = new FormGroup({
    surname: new FormControl(''),
    firstname: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });
}
