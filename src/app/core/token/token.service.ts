import { Injectable } from '@angular/core';
import * as jtw_decode from 'jwt-decode';

const TOKEN_KEY = 'X-ACCESS-TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  setRefreshToken(refresh_token: any) {
    window.localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
   }

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
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  isValidToken(token: string): boolean{
    // const tokenInfo = jtw_decode(token);
    // tokenInfo.exp = new Date(tokenInfo.exp * 1000);
    // return new Date() < tokenInfo.exp;
    return true;
  }

  isTokenValid(): boolean{
    // const token = this.getToken();
    // return this.isValidToken(token);
    return true;
  }

}
