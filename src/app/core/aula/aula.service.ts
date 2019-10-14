import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Aula } from '../models/aula';
import {AULAS} from './mock-aulas';


@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private endpointURL = `${environment.API_URL}aulas`;

  constructor(private http: HttpClient) { }

  listarAulas(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.endpointURL);
  }

  listarAulasStub(): Observable<Aula[]>{
    return of(AULAS);
  }

  cadastrar(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.endpointURL, aula);
  }

}
