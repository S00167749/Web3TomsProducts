import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';
import { Observable } from 'rxjs';
import { HttpErrorResponse,HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private _productUrl = 'http://localhost:3000/products';

  constructor(private _http : HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl).tap(
      data => console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
