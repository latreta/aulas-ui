import { Injectable } from '@angular/core';
import { Dicente } from 'src/app/core/model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DicenteService {

    private endpointURL = `${environment.API_URL}dicentes`;
    constructor(private http: HttpClient) {
        console.log('dicente service started');
    }

    cadastrar(dicente: Dicente): Observable<Dicente> {
        return this.http.post<Dicente>(this.endpointURL, dicente);
    }

    listar(): Observable<Dicente[]> {
        return this.http.get<Dicente[]>(this.endpointURL);
    }
}
