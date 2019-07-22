import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './home/component/signin/signin.component';
import { SignUpComponent } from './home/component/signup/signup.component';
import { ListarAulaComponent } from './aula/component/listar-aula/listar-aula.component';

const routes: Routes = [
  {path: '**', redirectTo: '/aulas', pathMatch: 'full'},
  {path: 'aulas', component: ListarAulaComponent},
  {path: 'cadastrar', component: SignUpComponent},
  {path: 'login', component: SignInComponent}
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
