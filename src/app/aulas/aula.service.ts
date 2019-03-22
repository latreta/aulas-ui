import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aula } from '../core/model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  aulaURL: string;

  constructor(private http: HttpClient) {
    this.aulaURL = `${environment.apiURL}/aulas`;
  }

  getAulas(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.aulaURL);
  }

  getAula(id: number): Observable<Aula> {
    return this.http.get<Aula>(this.aulaURL + `/${id}`);
  }
}
