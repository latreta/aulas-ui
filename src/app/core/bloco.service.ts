import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocoService {

  BLOCOS_ENDPOINT = `${environment.API_URL}blocos/`;

  constructor(private http: HttpClient) { }

  GetBlocos(): Observable<any[]> {
    return this.http.get<any[]>(this.BLOCOS_ENDPOINT);
  }
}
