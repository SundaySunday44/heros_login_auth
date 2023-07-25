import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
{path: 'home', component: HomeComponent}, {path: 'about', component: AboutComponent}, {path: 'heroes', component: HeroesComponent}, {path: 'heroe/:id', component: HeroeComponent}, 
{path: 'register',component: RegisterComponent,
  ...canActivate(()=>redirectUnauthorizedTo(['/login']))
},
{path: 'new-user',component: RegisterUserComponent},
{path: 'login',component: LoginUserComponent},
{path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
