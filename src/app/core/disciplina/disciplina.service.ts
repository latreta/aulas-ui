import { Injectable } from '@angular/core';
import {Disciplina } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private endpointURL = `${environment.API_URL}disciplinas`;

  constructor(private http: HttpClient) { }

  listarDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.endpointURL);
  }

}
