import { NgModule } from '@angular/core';
import { SignInComponent } from './component/signin/signin.component';
import { SignUpComponent } from './component/signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [AppRoutingModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [SignInComponent, SignUpComponent],
    declarations: [SignInComponent, SignUpComponent],
    providers: []
})
export class HomeModule {

}
