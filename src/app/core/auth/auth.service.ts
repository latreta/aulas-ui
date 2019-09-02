import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.API_URL}auth`, {email, password})
    .pipe(tap(res => {
      this.userService.setToken(res.token);
    }));
  }

  getInformation(): User {
    return {
      id: 1,
      name: 'Usuario logado'
    };
  }

  isTokenValid(): boolean {
    return this.userService.isTokenValid();
  }
}
