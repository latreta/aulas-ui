import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoliClassHttp } from './policlass-http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [PoliClassHttp]
})
export class CoreModule {

}
