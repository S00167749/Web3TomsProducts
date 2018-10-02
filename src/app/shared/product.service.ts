import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private _productUrl = 'http://localhost:3000/products';

  constructor(private _http : HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl);
  }
}
