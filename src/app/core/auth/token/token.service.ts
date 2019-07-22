import { Injectable } from '@angular/core';

const TOKEN_KEY = 'X-ACCESS-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(): string {
    return '';
  }

  hasToken() {
    return null;
  }

  setToken(token: string){
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken(){
    window.localStorage.removeItem(TOKEN_KEY);
  }

}
