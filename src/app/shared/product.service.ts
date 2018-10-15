import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';
import { Observable } from 'rxjs';
import { HttpErrorResponse,HttpClient } from '@angular/common/http';
//import 'rxjs/add/observable/throw';
import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    //fake json url
    private _productUrl = 'http://localhost:3000/products';
    //collection reference and query types and service wrapper for sdk
    productsCollection: AngularFirestoreCollection<IProduct>;
    //set of products over any amount of time.
    products: Observable<IProduct[]>;

    //array to hold all products
    allProducts: IProduct[];
    errorMessage: string;

  constructor(private _http : HttpClient, private _afs: AngularFirestore) {
    //connect to db
    this.productsCollection = _afs.collection<IProduct>("products");
   }

  getProducts(): Observable<IProduct[]> {
    //return this._http.get<IProduct[]>(this._productUrl).pipe(
     // tap(data => console.log('All : ' + JSON.stringify(data)))
     // ,catchError(this.handleError));


     this.products = this.productsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as IProduct;
         console.log("GetProducts : data " + JSON.stringify(data));
         const id = a.payload.doc.id;
         console.log("getProducts.id = "+id );
         return { id, ...data };
       }))
     );
     return this.products;
     
  }

  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

  addProduct(product: IProduct) : void {
    this.productsCollection.add(product);
  }

  addAllProducts(){
    this._http.get<IProduct[]>(this._productUrl).subscribe(
      products => {
        this.allProducts = products;
        for(let product of this.allProducts){
            console.log("Adding: " + product.productName); 
            this.productsCollection.add(product);
        }
      },
      error => (this.errorMessage = <any>error)
    );
  }

  deleteProduct(id:string): void {
    this.productsCollection.doc(id).delete()
    .catch(error => {console.log("deleteProduct error: "+error)})
    .then(() => console.log("deleteProduct: id = "+id));
  }
}
