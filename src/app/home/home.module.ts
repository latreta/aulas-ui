import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    imports: [],
    exports: [SignInComponent, SignUpComponent],
    declarations: [SignInComponent, SignUpComponent],
    providers: []
})
export class HomeModule {

}
