import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/home/login/login.component'
import { LabsComponent } from './pages/labs/labs.component'

import { SignalComponent } from './pages/labs/signal/signal.component'
import { DirectivesComponent } from './pages/labs/directives/directives.component'
import { EventsComponent } from './pages/labs/events/events.component'
import {MainComponent} from "./pages/home/shared/main/main.component";
import { MainComponent as LabsMainComponent } from "./pages/labs/main/main.component"
//http://localhost:4200/auth/login
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ],
  },
  {
    path:'labs',
    title: 'Labs',
    component: LabsComponent,
    children: [
      {
        path: '',
        component: LabsMainComponent
      },
      {
        path: 'signal', // labs/signal
        title: 'Signal',
        component: SignalComponent
      },
      {
        path: 'directives', // labs/directives
        title: 'Directives',
        component: DirectivesComponent
      },
      {
        path: 'events', // labs/events
        title: 'Events',
        component: EventsComponent
      }
    ]
  }
];
