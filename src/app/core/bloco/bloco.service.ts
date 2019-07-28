import { Injectable } from '@angular/core';
import { Bloco } from 'src/app/core/model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlocoService {

    private endpointURL = `${environment.API_URL}blocos/`;

    constructor(private http: HttpClient) {
    }

    getBlocos(): Observable<Bloco[]> {
        return this.http.get<Bloco[]>(this.endpointURL);
    }

    getBloco(id: number): Observable<Bloco> {
        return this.http.get<Bloco>(`${this.endpointURL}${id}`);
    }

    cadastrar(bloco: Bloco): Observable<any> {
        return this.http.post(this.endpointURL, bloco);
    }
}