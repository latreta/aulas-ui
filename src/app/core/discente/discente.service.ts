import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Discente } from '../models/discente';
import {DISCENTES} from './mock-discentes';

@Injectable({
    providedIn: 'root'
})
export class DiscenteService {

    private endpointURL = `${environment.API_URL}discentes`;
    constructor(private http: HttpClient) {
    }

    cadastrar(discente: Discente): Observable<Discente> {
        return this.http.post<Discente>(this.endpointURL, discente);
    }

    remover(id: number): Observable<any>{
        return this.http.delete<any>(`${this.endpointURL}/${id}`);
    }

    listar(): Observable<Discente[]> {
        return this.http.get<Discente[]>(this.endpointURL);
    }

    listarDiscentesStub(): Observable<Discente[]> {
        return of(DISCENTES);
    }

    detalharPorId(id: number){
        return this.http.get<Discente>(`${this.endpointURL}/${id}`);
    }
}
