import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AulaModule } from './aula/aula.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UserModule,
    HomeModule,
    AulaModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
