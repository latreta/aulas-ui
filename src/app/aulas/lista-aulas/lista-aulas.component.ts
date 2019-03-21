import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/core/model';

@Component({
  templateUrl: './lista-aulas.component.html',
  styleUrls: ['./lista-aulas.component.css']
})
export class ListaAulasComponent implements OnInit {

  aulas: Aula[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'sala', header: 'Sala' },
      { field: 'cadeira', header: 'Cadeira' },
      { field: 'professor', header: 'Professor' },
      { field: 'horarioInicio', header: 'Horário' },
      { field: 'horaCadastro', header: 'Começou de ' }
    ];
    this.aulas = [
      {
        nome: 'Aula 1',
        sala: 'B01',
        cadeira: 'Cadeira 1',
        horarioInicio: '07:10',
        horarioFim: '08:50',
        professor: 'Professor 1',
        horaCadastro: '08:00'
      }
    ];
  }

}
