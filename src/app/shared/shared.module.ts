import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoliButtonComponent } from './components/poli-button/poli-button.component';
import { PoliSelectComponent } from './components/poli-select/poli-select.component';

@NgModule({
  declarations: [
    PoliButtonComponent,
    PoliSelectComponent
  ],
  exports: [
    PoliButtonComponent,
    PoliSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
