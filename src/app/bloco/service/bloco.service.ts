import { Injectable } from '@angular/core';
import { Bloco } from 'src/app/core/model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlocoService {

    constructor(private http: HttpClient) {
    }

    getBlocos(): Bloco[] {
        let blocos: Bloco[];
        this.http.get<Bloco[]>(environment.API_URL).subscribe((response) => {
            blocos = response;
        });
        return blocos;
    }
}