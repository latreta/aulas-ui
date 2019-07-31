import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AulaModule } from './aula/aula.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BlocoModule } from './bloco/bloco.module';
import { SalaModule } from './sala/sala.module';
import { CadastraDicenteComponent } from './dicente/components/cadastra-dicente/cadastra-dicente.component';
import { DicenteModule } from './dicente/dicente.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserModule,
    CoreModule,
    HomeModule,
    SharedModule,
    SalaModule,
    BlocoModule,
    DicenteModule,
    AulaModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
