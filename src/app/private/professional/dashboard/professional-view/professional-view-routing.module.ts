import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalViewComponent } from './professional-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalViewRoutingModule {}
