import { Injectable } from '@angular/core';
import { IUser } from '../domain/IUser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private URL = 'https://first-gamestore.herokuapp.com/user/';
    private postedUser: IUser;
    constructor(private _http: HttpClient) {}

    getAllUsers(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this.URL + 'list');
      }

    createUser(username: string, password: string, email: string): Observable<IUser> {
        this.postedUser = {
                        username: username,
                        password: password,
                        mail: email,
                        role: 'user'};
        return this._http.post<IUser>(this.URL, this.postedUser);
    }
}
