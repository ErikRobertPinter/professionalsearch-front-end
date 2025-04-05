import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPasswordCreatedComponent } from './new-password-created.component';

const routes: Routes = [
  {
    path: '',
    component: NewPasswordCreatedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPasswordCreatedRoutingModule {}
