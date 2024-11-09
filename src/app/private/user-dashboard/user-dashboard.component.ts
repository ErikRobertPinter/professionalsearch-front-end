import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
})
export class UserDashboardComponent {
  username: string = 'Béla';
  professionals = [
    {
      id: 1,
      name: 'Erik Robert Pinter',
      title: 'Gazdaságinformatikus',
    },
    {
      id: 2,
      name: 'Róbertné Pintér',
      title: 'óvodapedagógus',
    },
    {
      id: 3,
      name: 'Róbert Pintér',
      title: 'gépbeállító',
    },
    {
      id: 4,
      name: 'Róbert Harmati',
      title: 'Mérnökinformatikus',
    },
  ];
}
