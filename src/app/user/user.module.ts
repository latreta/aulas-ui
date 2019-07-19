import { NgModule } from '@angular/core';
import { CadastraUsuarioComponent } from './cadastra.usuario/cadastra.usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[CadastraUsuarioComponent],
    imports:[
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[CadastraUsuarioComponent]
})
export class UserModule {

}