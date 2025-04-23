import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideCharts } from 'ng2-charts';

/*bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
bootstrapApplication(AppComponent, {
  providers: [
    provideCharts(), // <-- EZ ITT FONTOS!
  ],
});
*/
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideCharts(), // ✅ ez kell ng2-charts@8-hoz
    ...(appConfig.providers || []),
  ],
}).catch((err) => console.error(err));
