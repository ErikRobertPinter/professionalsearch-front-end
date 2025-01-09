import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalSignupFormComponent } from './professional-signup-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalSignupFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalSignupFormRoutingModule {}
