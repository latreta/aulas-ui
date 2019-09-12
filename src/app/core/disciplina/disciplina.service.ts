import { Injectable } from '@angular/core';
import { Aula, Cadeira } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private endpointURL = `${environment.API_URL}cadeiras`;

  constructor(private http: HttpClient) { }

  listarDisciplinas(): Observable<Cadeira[]> {
    return this.http.get<Cadeira[]>(this.endpointURL);
  }

}
