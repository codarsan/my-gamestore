import { IProduct } from '../domain/IProduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../domain/ICategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'https://first-gamestore.herokuapp.com/product/';
  private cat: string;
  private postedProduct: IProduct;
  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.URL + 'list');
  }

  findByCategory(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.URL + 'in/' + this.cat);
  }

  createProduct(productName: string, category: ICategory,
                description: string, year: string, price: string,
                region: string, image: string): Observable<object> {
    let postedRegion: number;
    if (region === 'EU') {
      postedRegion = 0;
    }
    if (region === 'US') {
      postedRegion = 1;
    }
    if (region === 'JP') {
      postedRegion = 2;
    }
    this.postedProduct = { productName: productName,
                           category: category,
                           description: description,
                           year: +year,
                           price: +price,
                          region: postedRegion,
                          image: image
                        };
    return this._http.post(this.URL, this.postedProduct);
  }
}
