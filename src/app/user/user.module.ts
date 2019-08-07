import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[MinhaContaComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: []
})
export class UserModule {

}