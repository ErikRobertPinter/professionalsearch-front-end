import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessfulSignupComponent } from './successful-signup.component';

const routes: Routes = [
  {
    path: '',
    component: SuccessfulSignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessfulSignupRoutingModule {}
