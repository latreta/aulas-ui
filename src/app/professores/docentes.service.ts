import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  docentesURL: string;

  constructor() {
    this.docentesURL = `${environment.apiURL}/docentes`;
  }
}
