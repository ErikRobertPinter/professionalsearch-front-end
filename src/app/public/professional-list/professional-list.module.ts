import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalListRoutingModule } from './professional-list-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ProfessionalListRoutingModule],
})
export class ProfessionalListModule {}
