import { NgModule } from '@angular/core';
import { CadastraBlocoComponent } from './components/cadastra-bloco/cadastra-bloco.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [ReactiveFormsModule, FormsModule],
    exports: [CadastraBlocoComponent],
    providers: [],
    declarations: [CadastraBlocoComponent]
})
export class BlocoModule {

}