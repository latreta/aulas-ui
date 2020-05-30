import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from './token/token.service';

export interface TokenResponse {
  token: string;
  refresh_token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ENDPOINT_URL = `${environment.API_URL}auth`;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public authenticateMock(username: string, password: string, keepMe: boolean) {
    this.http.get(this.ENDPOINT_URL)
      .subscribe((res: TokenResponse) => {
        this.tokenService.AddToken(res.token);
      }, err => console.error(err));
  }

  public authenticate(username: string, password: string, keepMe: boolean) {
    this.http.post(this.ENDPOINT_URL, { username, password, keepMe })
      .subscribe((response) => {
        console.log('Logado');
      }, err => console.error('Falha no login'));
  }

  public logout() {
    console.log('Deslogando');
  }
}
