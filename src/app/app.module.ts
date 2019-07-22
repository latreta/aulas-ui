import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AulaModule } from './aula/aula.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CadastraBlocoComponent } from './bloco/cadastra-bloco/cadastra-bloco.component';




@NgModule({
  declarations: [
    AppComponent,
    CadastraBlocoComponent,
  ],
  imports: [
    UserModule,
    HomeModule,
    SharedModule,
    AulaModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
