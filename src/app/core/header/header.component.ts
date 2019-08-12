import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    private user$: Observable<User>;
    private actions = [];

    constructor(private authService: AuthService, private userService: UserService) {
        this.user$ = userService.getUser();
    }

    logout() {
        this.userService.logout();
    }
}
