import { Injectable } from '@angular/core';
import { IUser } from '../domain/IUser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FakeAuthService {

    private URL = 'https://first-gamestore.herokuapp.com/user/';
    currentUser: IUser;

    constructor(private _http: HttpClient, private router: Router) {}

    loginUser(username: string, password: string) {
        this.currentUser = {
            username: username,
            password: password
        };
        this.router.navigate(['/products']);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
