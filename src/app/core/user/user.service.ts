import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;
    private endpointURL = environment.API_URL + 'users/';

    constructor(private tokenService: TokenService, private http: HttpClient) {
        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
    }

    signup(data: any): Observable<any> {
        return this.http.post(this.endpointURL, data);
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    getUserName() {
        return this.userName;
    }

    decodeAndNotify() {
        const token = this.tokenService.getToken();
        if(token != null){
            const payload = jtw_decode(token);
            const isValid = this.tokenService.isValidToken(token);        
            if(isValid){
                this.userName = payload.name;
                let user: User = {
                    name: payload.name,
                    authorities: payload.authorities
                }
                this.userSubject.next(user);
            }else {
                this.logout();
            }
        }        
    }

    retrieveLoggedUsersInfo(): Observable<MyAccount> {
        return this.http.get<MyAccount>(`${this.endpointURL}token/${this.tokenService.getToken()}`);
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    isTokenValid(): boolean {
        let token = this.tokenService.getToken();
        return this.tokenService.isValidToken(token);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
        this.userName = null;
    }


    isLogged() {
        return this.tokenService.hasToken();
    }

}