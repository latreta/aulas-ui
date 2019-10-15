import { NgModule } from '@angular/core';
import { SignInComponent } from './component/signin/signin.component';
import { SignUpComponent } from './component/signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home.component';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,        
        RouterModule,
        InputTextModule,
        DropdownModule,
        CalendarModule,
        InputMaskModule,
        PasswordModule
    ],
    providers: []
})
export class HomeModule {

}
