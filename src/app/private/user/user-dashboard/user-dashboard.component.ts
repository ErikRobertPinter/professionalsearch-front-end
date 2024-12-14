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
  basePath: string = '../../../assets/media/pictures/professionals/';
  professionals = [
    {
      id: 1,
      name: 'Takács László',
      title: 'Gazdaságinformatikus',
      img: '1.jpg',
    },
    {
      id: 2,
      name: 'Pintér Róbertné',
      title: 'dada',
      img: '5.jpg',
    },
    {
      id: 3,
      name: 'Molnár Róbert',
      title: 'Hegesztő',
      img: '2.jpg',
    },
    {
      id: 4,
      name: 'Harmati Róbert',
      title: 'Mérnökinformatikus',
      img: '3.jpg',
    },
    {
      id: 4,
      name: 'László Adorján',
      title: 'angoltanár',
      img: '4.jpg',
    },
    {
      id: 4,
      name: 'Hollósi Fanni',
      title: 'kozmetikus',
      img: '6.jpg',
    },
    {
      id: 4,
      name: 'Kálmán Sándor',
      title: 'burkoló',
      img: '7.jpg',
    },
    {
      id: 4,
      name: 'Gáspár Elemér',
      title: 'villanyszerelő',
      img: '8.jpg',
    },
  ];
}
