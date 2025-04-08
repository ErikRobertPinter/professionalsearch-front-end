import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalViewRoutingModule } from './professional-view-routing.module';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfessionalViewRoutingModule],
})
export class ProfessionalViewModule implements OnInit {
  userid = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
    });
  }
}
