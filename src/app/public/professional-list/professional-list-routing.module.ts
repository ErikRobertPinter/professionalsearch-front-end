import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalListComponent } from './professional-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalListRoutingModule {}
