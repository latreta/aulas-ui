import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from './components/horario/horario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
    exports: [HeaderComponent, HorarioComponent],
    providers: [],
    declarations: [HeaderComponent, HorarioComponent]
})
export class SharedModule {

}