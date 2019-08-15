import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';
import { User } from './user';
import { Token } from '../model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
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
                this.userSubject.next(payload.name);
            }else {
                this.logout();
            }
        }        
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
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