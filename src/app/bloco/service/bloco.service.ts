import { Injectable } from '@angular/core';
import { Bloco } from 'src/app/core/model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlocoService {

    constructor(private http: HttpClient) {
    }

    getBlocos(): Observable<Bloco[]> {
        return this.http.get<Bloco[]>(environment.API_URL + 'blocos');
    }

    cadastrar(bloco: Bloco): Observable<any> {
        return this.http.post(environment.API_URL + 'blocos', bloco);
    }
}