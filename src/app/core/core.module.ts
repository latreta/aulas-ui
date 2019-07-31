import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent],
    providers: []
})
export class CoreModule {

}
