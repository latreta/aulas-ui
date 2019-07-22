import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent],
    providers: [],
    declarations: [HeaderComponent]
})
export class SharedModule {

}