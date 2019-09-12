import { Injectable } from '@angular/core';
import { Discente } from 'src/app/core/model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

    listar(): Observable<Discente[]> {
        return this.http.get<Discente[]>(this.endpointURL);
    }
}
