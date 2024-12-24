import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';
import { ProfessionalLayoutComponent } from './private/professional/professional-layout/professional-layout.component';
import { UserLayoutComponent } from './private/user/user-layout/user-layout.component';

export const routes: Routes = [
  //public routes
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
        path: 'about',
        loadChildren: () =>
          import('./public/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./public/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./public/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./public/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./public/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./public/signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: 'successful-signup',
        loadChildren: () =>
          import('./public/successful-signup/successful-signup.module').then(
            (m) => m.SuccessfulSignupModule
          ),
      },
    ],
  },
  //private routes
  /*{
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'user-dashboard',
        loadChildren: () =>
          import('./private/user-dashboard/user-dashboard.module').then(
            (m) => m.UserDashboardModule
          ),
      },
      {
        path: 'admin-dashboard',
        loadChildren: () =>
          import('./private/admin-dashboard/admin-dashboard.module').then(
            (m) => m.AdminDashboardModule
          ),
      },
      {
        path: 'professional-layout',
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
            path: 'job',
            loadChildren: () =>
              import('./private/professional/job/job.module').then(
                (m) => m.JobModule
              ),
          },
        ],
      },
      {
        path: 'add-project',
        loadChildren: () =>
          import('./private/add-project/add-project.module').then(
            (m) => m.AddProjectModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./private/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./private/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },*/
  //professional-layout
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
        path: 'job',
        loadChildren: () =>
          import('./private/professional/job/job.module').then(
            (m) => m.JobModule
          ),
      },
      {
        path: 'job-view/:id',
        loadChildren: () =>
          import('./private/professional/jobs/job-view/job-view.module').then(
            (m) => m.JobViewModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./private/professional/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./private/professional/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
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
