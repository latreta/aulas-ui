import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { TokenService } from '../token/token.service';

const endpointURL = `${environment.API_URL}oauth/`;
const authorizationBasic = 'Basic ' + btoa('angular:latretajohnson');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  login(username: string, password: string) {
    const headers = {
      'Authorization': authorizationBasic,
      'Content-type': 'application/x-www-form-urlencoded'

    }
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')
    .set('client', 'angular');
    return this.http.post<any>(endpointURL + 'token', body.toString() , { headers });
  }

  getInformation(): User {
    return {
      name: 'Usuario logado',
      authorities: ['ROLE_ADMIN']
    };
  }

  isTokenValid(): boolean {
    return this.tokenService.isTokenValid();
  }
}
