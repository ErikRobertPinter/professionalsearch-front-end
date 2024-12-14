import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-view',
  standalone: true,
  imports: [],
  templateUrl: './job-view.component.html',
  styleUrl: './job-view.component.scss',
})
export class JobViewComponent implements OnInit {
  public id: number = 0;
  public title: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      //this.id = param.id;
      //this.title = param.title;
    });
  }
}
