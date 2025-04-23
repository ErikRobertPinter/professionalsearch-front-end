import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyjobComponent } from './myjob.component';

const routes: Routes = [
  {
    path: '',
    component: MyjobComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyjobRoutingModule {}
