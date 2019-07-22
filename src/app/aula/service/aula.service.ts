import { Injectable } from '@angular/core';
import { Aula } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor() { }

  listarAulas(): Aula[] {
    const aulas = [{
      id: 0,
      turma: 'BM',
      sala: {id: 0, name: '7', bloco: { id: 0, name: 'LIP'}},
      professor: {id: 0, name: 'Professor teste'},
      cadeira: {id: 0, name: 'Cálculo 4'},
      inicio: '08:50',
      fim: '10:30'
    }
    ];
    return aulas;
  }

}
