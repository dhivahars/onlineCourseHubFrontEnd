import { Routes } from '@angular/router';
import { Home } from './modules/home/home';

import { Login } from './modules/auth/login/login';
import { Register } from './modules/auth/register/register';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'register',component:Register},
    {path:'login',component:Login}
];