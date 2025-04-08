import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';
import { ProfessionalLayoutComponent } from './private/professional/professional-layout/professional-layout.component';
import { UserLayoutComponent } from './private/user/user-layout/user-layout.component';

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
            './public/new-password-created/new-password-created.module'
          ).then((m) => m.NewPasswordCreatedModule),
      },
    ],
  },
  {
    path: '',
    component: ProfessionalLayoutComponent,
    children: [
      {
        path: 'professional-dashboard',
        loadChildren: () =>
          import(
            './private/professional/professional-dashboard/professional-dashboard.module'
          ).then((m) => m.ProfessionalDashboardModule),
      },
      {
        path: 'professional-job-dashboard',
        loadChildren: () =>
          import(
            './private/professional/job-dashboard/job-dashboard.module'
          ).then((m) => m.JobDashboardModule),
      },
      {
        path: 'professional-profile',
        loadChildren: () =>
          import('./private/professional/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'job-added-successfully',
        loadChildren: () =>
          import(
            './private/professional/job/job-added-successfully/job-added-successfully.module'
          ).then((m) => m.JobAddedSuccessfullyModule),
      },
    ],
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'user-dashboard',
        loadChildren: () =>
          import('./private/user/user-dashboard/user-dashboard.module').then(
            (m) => m.UserDashboardModule
          ),
      },
      {
        path: 'professional-user-view/:id',
        loadChildren: () =>
          import(
            './private/user/professional-view/professional-view.module'
          ).then((m) => m.ProfessionalViewModule),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./private/user/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];
