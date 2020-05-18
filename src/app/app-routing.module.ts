import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  },
  {
    path: 'welcome', component: HomeComponent, children: [
      {
        path: '', component: MainComponent
      },
      {
        path: 'signin', component: SigninComponent
      },
      {
        path: 'signup', component: SignupComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
