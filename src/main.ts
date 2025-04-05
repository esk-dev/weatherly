import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './app/application/root/root.component';
import { appConfig } from './app/application/app.config';

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err),
);
