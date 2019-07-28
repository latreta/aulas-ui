import { NgModule } from '@angular/core';
import { CadastraUsuarioComponent } from './components/cadastra.usuario/cadastra.usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[CadastraUsuarioComponent, MinhaContaComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [CadastraUsuarioComponent]
})
export class UserModule {

}