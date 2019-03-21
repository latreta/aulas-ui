import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

import { ListaAulasComponent } from './aulas/lista-aulas/lista-aulas.component';
import { CadastraAulasComponent } from './aulas/cadastra-aulas/cadastra-aulas.component';
import { AlteraAulasComponent } from './aulas/altera-aulas/altera-aulas.component';

import { ListaCadeirasComponent } from './cadeiras/lista-cadeiras/lista-cadeiras.component';
import { CadastraCadeirasComponent } from './cadeiras/cadastra-cadeiras/cadastra-cadeiras.component';
import { AlteraCadeirasComponent } from './cadeiras/altera-cadeiras/altera-cadeiras.component';

import { ListaSalasComponent } from './salas/lista-salas/lista-salas.component';
import { CadastraSalasComponent } from './salas/cadastra-salas/cadastra-salas.component';
import { AlteraSalasComponent } from './salas/altera-salas/altera-salas.component';
import { ListaProfessoresComponent } from './professores/lista-professores/lista-professores.component';
import { AlteraProfessoresComponent } from './professores/altera-professores/altera-professores.component';
import { CadastraProfessoresComponent } from './professores/cadastra-professores/cadastra-professores.component';

import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FooterComponent } from './footer/footer.component';
import { FormAulaComponent } from './aulas/form-aula/form-aula.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAulasComponent,
    CadastraAulasComponent,
    AlteraAulasComponent,
    ListaCadeirasComponent,
    CadastraCadeirasComponent,
    AlteraCadeirasComponent,
    ListaSalasComponent,
    CadastraSalasComponent,
    AlteraSalasComponent,
    ListaProfessoresComponent,
    AlteraProfessoresComponent,
    CadastraProfessoresComponent,
    HeaderComponent,
    FooterComponent,
    FormAulaComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    MenubarModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
