import { Injectable } from '@angular/core';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): void {
    console.log('Logando com ' + password);
  }

  logout(): void {
    console.log('Logout');
  }

  getInformation(): User {
    return { name: 'Usuario logado', actions: [{label: 'Minha conta', address: '/minhaconta'}, {label: 'Minhas aulas', address: '/aulas/minhas'}]};
  }
}
