import { Injectable } from '@angular/core';
import { IFeedback } from '../domain/IFeedback';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    private URL = 'https://first-gamestore.herokuapp.com/feedback/';
    private postedFeedback: IFeedback;
    constructor(private _http: HttpClient) {}

    getAllFeedbacks(): Observable<IFeedback[]> {
        return this._http.get<IFeedback[]>(this.URL + 'list');
      }

    createFeedback(name: string, email: string, comments: string): Observable<IFeedback> {
        this.postedFeedback = {
                        name: name,
                        email: email,
                        comments: comments};
        return this._http.post<IFeedback>(this.URL, this.postedFeedback);
    }
}
