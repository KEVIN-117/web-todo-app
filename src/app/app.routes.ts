import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { AuthComponent } from './pages/auth/auth.component'

//http://localhost:4200/auth/login
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'auth',
    component: AuthComponent,
  }
];
