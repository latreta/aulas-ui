import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginGuard } from 'src/app/core/auth/login.guard';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [{
      path: 'login',
      component: SignInComponent,
      data: {
        title: 'Fazer login'
      }
    },
    {
      path: 'cadastrar',
      component: SignUpComponent,
      data: {
        title: 'Cadastrar-se'
      }
    }
  ]
}];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }
