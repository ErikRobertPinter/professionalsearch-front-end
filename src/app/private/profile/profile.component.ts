import { Component, OnInit } from '@angular/core';
import { RegularProfileComponent } from '../profiles/regular-profile/regular-profile.component';
import { ProfessionalProfileComponent } from '../profiles/professional-profile/professional-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RegularProfileComponent,
    ProfessionalProfileComponent,
  ],
  template: `<ng-container *ngIf="userType == 'regular' || userType == 'admin'"
      ><app-regular-profile></app-regular-profile
    ></ng-container>
    <ng-container
      *ngIf="userType == 'professional' || userType == 'admin-professional'"
      ><app-professional-profile></app-professional-profile
    ></ng-container>`,
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userType: string = '';
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType') ?? '';
  }
}
