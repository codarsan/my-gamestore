import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../domain/ICategory';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private postedCat: ICategory;
  private url = 'https://first-gamestore.herokuapp.com/category';

constructor(private _http: HttpClient) {}

  findAllCategories(): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(this.url + '/list');
  }

  findCategoryByName(catName: string): Observable<ICategory> {
    return this._http.get<ICategory>(this.url + '/list/' + catName);
  }

  createCategory(cat: string): Observable<object> {
    this.postedCat = {categoryName: cat};
    return this._http.post(this.url, this.postedCat);
  }
}
