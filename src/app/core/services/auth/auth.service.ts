import { Injectable } from '@angular/core';
import { User } from '../../model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

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

  logout(): void {
    console.log('Logout');
  }

  getInformation(): User {
    return { name: 'Usuario logado', actions: [{label: 'Minha conta', address: '/minhaconta'}, {label: 'Minhas aulas', address: '/aulas/minhas'}]};
  }
}
