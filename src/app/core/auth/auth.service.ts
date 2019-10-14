import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user/user';
import { TokenService } from '../token/token.service';

const endpointURL = `${environment.API_URL}oauth/`;
const authorizationBasic = 'Basic ' + btoa('angular:latretajohnson');

const headers = {
  'Authorization': authorizationBasic,
  'Content-type': 'application/x-www-form-urlencoded'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  login(username: string, password: string) {
    
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')
    .set('client', 'angular');
    return this.http.post<any>(endpointURL + 'token', body.toString() , { headers });
  }

  getNewAccessToken(): void {
    const body = 'grant_type=refresh_token';
    this.http.post<any>(endpointURL + 'token', body, { headers, withCredentials: true})
    .subscribe(response => {
      this.storeNewToken(response.access_token);
    }, err => console.log(err));
  }

  getInformation(): User {
    return {
      name: 'Usuario logado',
      authorities: ['ROLE_ADMIN']
    };
  }

  storeNewToken(token: string){
    this.tokenService.setToken(token);
  }

  isTokenValid(): boolean {
    return this.tokenService.isTokenValid();
  }
}
