import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login-page/login-page.component';

import { HomePageComponent } from './modules/home-page/home-page.component';

export const routes: Routes = [
  {
   path:'login',
   component:LoginPageComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }

];
