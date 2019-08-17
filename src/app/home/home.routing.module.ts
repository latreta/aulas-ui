import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home.component';
import { SignInComponent } from './component/signin/signin.component';
import { SignUpComponent } from './component/signup/signup.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
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
