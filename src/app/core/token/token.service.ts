import { Injectable } from '@angular/core';
import * as jtw_decode from 'jwt-decode';
import { Token } from '@angular/compiler';

const TOKEN_KEY = 'X-ACCESS-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(): string {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  hasToken() {
    return !!window.localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string){
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken(){
    window.localStorage.removeItem(TOKEN_KEY);
  }

  isValidToken(token: string): boolean{
    let tokenInfo = jtw_decode(token);
    tokenInfo.exp = new Date(tokenInfo.exp * 1000);
    return new Date() < tokenInfo.exp;
  }

}
