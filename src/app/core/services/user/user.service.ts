import { Injectable } from '@angular/core';
import { User } from '../../model';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import * as jtw_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>({name: 'latreta', actions:[]});
    private userName: string;

    constructor(private tokenService: TokenService) {
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    getUserName() {
        return this.userName;
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

}