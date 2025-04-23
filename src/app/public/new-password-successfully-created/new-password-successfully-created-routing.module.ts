import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPasswordSuccessfullyCreatedComponent } from './new-password-successfully-created.component';

const routes: Routes = [
  {
    path: '',
    component: NewPasswordSuccessfullyCreatedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPasswordSuccessfullyCreatedRoutingModule {}
