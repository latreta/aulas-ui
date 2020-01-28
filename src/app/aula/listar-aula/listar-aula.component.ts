import { Component, OnInit} from '@angular/core';

import { AulaService } from 'src/app/core/aula/aula.service';
import { Aula } from 'src/app/core/models/aula';
import { Option } from 'src/app/shared/components/poli-select/poli-select.component';

@Component({
  selector: 'app-listar-aula',
  templateUrl: './listar-aula.component.html'
})
export class ListarAulaComponent implements OnInit {

  private aulas: Aula[] = [];
  private opcoes: Option[] = [{label: 'Teste', value: '1'}];
  
  constructor(private aulaService: AulaService) {
  }

  ngOnInit() {
    this.getAulasStub();
    
  }  

  getAulas(): void {
    this.aulaService.listarAulas().subscribe(response => {
      this.aulas = response;
    }, err => console.log(err.error.message));
  }

  getAulasStub(): void {
    this.aulaService.listarAulasStub()
    .subscribe((response: Aula[]) => {
      this.aulas = response;
    },err => console.log(err));
  }

  getAulasEmptyStub(): void {
    this.aulas = [];
  }

  alterar(id: number){
    console.log(this.aulas[id]);
  }

  delete(id: number){
    console.log(this.aulas[id]);
  }

  teste() {
    console.log("teste botão");
  }

}
