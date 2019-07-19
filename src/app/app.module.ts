import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AulaModule } from './aula/aula.module';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    UserModule,
    AulaModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
