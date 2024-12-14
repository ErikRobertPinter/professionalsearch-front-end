import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-professional-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './professional-layout.component.html',
  styleUrl: './professional-layout.component.scss',
})
export class ProfessionalLayoutComponent {}
