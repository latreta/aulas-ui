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
      professor: 'Professor teste',
      cadeira: 'Cálculo 4',
      inicio: '08:50',
      fim: '10:30'
    }
    ];
    return aulas;
  }

}
