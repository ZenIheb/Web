import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PayementComponent } from './pages/payement/payement.component';
import { SigninComponent } from './pages/signin/signin.component';
export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    {path: 'login',component: LoginComponent},
    {path: 'homepage', component: HomePageComponent},
    {path: 'payement', component: PayementComponent},
    { path: 'signin', component: SigninComponent },
    { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
    
];
