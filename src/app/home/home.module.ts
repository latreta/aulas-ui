import { NgModule } from '@angular/core';
import { SignInComponent } from './component/signin/signin.component';
import { SignUpComponent } from './component/signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    exports: [SignInComponent, SignUpComponent],
    declarations: [SignInComponent, SignUpComponent],
    providers: []
})
export class HomeModule {

}
