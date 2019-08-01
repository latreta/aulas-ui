import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastraDiscenteComponent } from './components/cadastra-discente/cadastra-discente.component';

@NgModule({
    providers: [],
    declarations: [CadastraDiscenteComponent],
    imports: [ReactiveFormsModule, FormsModule],
    exports: [CadastraDiscenteComponent]
})
export class DiscenteModule {
}