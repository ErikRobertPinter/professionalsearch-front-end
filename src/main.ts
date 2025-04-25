import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideCharts } from 'ng2-charts';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideCharts(),
    provideHttpClient(),
    ...(appConfig.providers || []),
  ],
}).catch((err) => console.error(err));
