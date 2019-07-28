import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

const TOKEN_KEY = 'X-ACCESS-TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(){
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
  }

}
