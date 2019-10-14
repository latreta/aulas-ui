import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AulaModule } from './aula/aula.module';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastModule } from 'primeng/toast';
import { LoginGuard } from './core/auth/guards/login.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,    
    ToastModule,
    SharedModule,
    HomeModule,
    AulaModule,
    AppRoutingModule
  ],
  providers: [MessageService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
