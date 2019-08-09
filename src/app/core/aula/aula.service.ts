import { Injectable } from '@angular/core';
import { Aula } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private endpointURL = `${environment.API_URL}aulas`;

  constructor(private http: HttpClient) { }

  listarAulas(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.endpointURL);
  }

  cadastrar(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.endpointURL, aula);
  }

}
