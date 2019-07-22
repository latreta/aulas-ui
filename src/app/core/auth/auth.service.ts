import { Injectable } from '@angular/core';

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
}
