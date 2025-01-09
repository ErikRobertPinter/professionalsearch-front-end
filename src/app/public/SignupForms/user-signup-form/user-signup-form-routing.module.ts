import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupFormComponent } from './user-signup-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserSignupFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSignupFormRoutingModule {}
