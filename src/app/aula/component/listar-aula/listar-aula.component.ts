import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/core/model';
import { AulaService } from '../../service/aula.service';

@Component({
  selector: 'app-listar-aula',
  templateUrl: './listar-aula.component.html',
  styleUrls: ['./listar-aula.component.css'],
})
export class ListarAulaComponent implements OnInit {

  private aulas: Aula[];

  constructor(private aulaService: AulaService) { }

  ngOnInit() {
    this.getAulas();
  }

  getAulas(): void {
    this.aulas = [{
      id: 0,
      turma: 'BM',
      discente: {id : 0, name : 'Teste'},
      sala: {id: 0, name: '8', bloco : {id : 0, name : 'b'}},
      cadeira: {
        id: 0,
        name: 'Calculo 4'
      },
      inicio : '07:10',
      fim : '08:50'}]
    // this.aulaService.listarAulas().subscribe(response => {
    //   this.aulas = response;
    // }, err => console.log(err));
  }

  alterar(id: number){
    console.log(this.aulas[id]);
  }

  delete(id: number){
    console.log(this.aulas[id]);
  }

}
