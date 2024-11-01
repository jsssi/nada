import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login-page/login-page.component';

import { HomePageComponent } from './modules/home-page/home-page.component';
import { ForgetPasswordModalComponent } from './modules/forget-password-modal/forget-password-modal.component';

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
    path:'forgot-password',
    component: ForgetPasswordModalComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }

];
