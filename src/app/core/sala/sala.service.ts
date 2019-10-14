import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sala } from '../models/sala';

@Injectable({
    providedIn: 'root'
})
export class SalaService {

    private endpointURL = `${environment.API_URL}salas`;

    constructor(private http: HttpClient){
    }

    getSalas(): Observable<Sala[]> {
        return this.http.get<Sala[]>(this.endpointURL);
    }

    getSala(id: number): Observable<Sala> {
        return this.http.get<Sala>(`${this.endpointURL}/${id}`);
    }

    cadastra(sala: Sala): Observable<Sala> {
        return this.http.post<Sala>(this.endpointURL, sala);
    }

}