import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CotextServiceService } from './services/cotext-service.service'

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), CotextServiceService],
};
