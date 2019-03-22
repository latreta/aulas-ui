import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CadeiraService {

  cadeirasURL: string;

  constructor() {
    this.cadeirasURL = `${environment.apiURL}/cadeiras`;
  }
}
