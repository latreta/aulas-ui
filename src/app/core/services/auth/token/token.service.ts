import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

const ACCESS_TOKEN_KEY = 'X_ACCESS_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  AddToken(token: string): void {
    if (token != null) {
      window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
  }

  RetrieveToken(): string {
    const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);
    return token;
  }

  DestroyToken(): void{
    window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  ValidateToken(): boolean {
    const token = this.RetrieveToken();
    if (token == null) {
      return false;
    }
    return true;
  }


}
