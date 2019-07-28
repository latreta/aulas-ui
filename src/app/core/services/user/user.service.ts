import { Injectable } from '@angular/core';
import { User } from '../../model';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    getUserName() {
        return this.userName;
    }

    decodeAndNotify() {
        const token = this.tokenService.getToken();
        const payload = jtw_decode(token);
        this.userSubject.next(payload.name);
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

}