import { Component, OnInit} from '@angular/core';
import { Aula } from 'src/app/core/model';
import { AulaService } from 'src/app/core/aula/aula.service';

@Component({
  selector: 'app-listar-aula',
  templateUrl: './listar-aula.component.html'
})
export class ListarAulaComponent implements OnInit {

  private aulas: Aula[] = [];
  
  constructor(private aulaService: AulaService) {
  }

  ngOnInit() {
    this.getAulas();    
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

}
