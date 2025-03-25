import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAddedSuccessfullyComponent } from './job-added-successfully.component';

const routes: Routes = [
  {
    path: '',
    component: JobAddedSuccessfullyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobAddedSuccessfullyRoutingModule {}
