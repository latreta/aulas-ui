import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  salasURL: string;

  constructor() {
    this.salasURL = `${environment.apiURL}/salas`;
  }
}
