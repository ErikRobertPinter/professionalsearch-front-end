import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './private/private-layout/private-layout.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { ProfileComponent } from './private/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./public/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'professional-list',
        loadChildren: () =>
          import('./public/professional-list/professional-list.module').then(
            (m) => m.ProfessionalListModule
          ),
      },
      {
        path: 'professional-view/:id',
        loadChildren: () =>
          import('./public/professional-view/professional-view.module').then(
            (m) => m.ProfessionalViewModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./public/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./public/signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./public/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: 'new-password-successfully-created',
        loadChildren: () =>
          import(
            './public/new-password-successfully-created/new-password-successfully-created.module'
          ).then((m) => m.NewPasswordSuccessfullyCreatedModule),
      },
    ],
  },
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'myjobs',
        loadChildren: () =>
          import('./private/myjob/myjob.module').then((m) => m.MyjobModule),
      },
      {
        path: 'job-added-successfully',
        loadChildren: () =>
          import(
            './private/jobs/job-added-successfully/job-added-successfully.module'
          ).then((m) => m.JobAddedSuccessfullyModule),
      },
      {
        path: 'jobs-list',
        loadChildren: () =>
          import('./private/jobs-list/jobs-list.module').then(
            (m) => m.JobsListModule
          ),
      },
      {
        path: 'user-list',
        loadChildren: () =>
          import('./private/user-list/user-list.module').then(
            (m) => m.UserListModule
          ),
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'professional-user-view/:id',
        loadChildren: () =>
          import('./private/professional-view/professional-view.module').then(
            (m) => m.ProfessionalViewModule
          ),
      },
    ],
  },
];
