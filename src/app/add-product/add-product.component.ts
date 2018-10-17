import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productId : number;
  productName : string;
  productCode : string;
  releaseDate : string;
  description : string;
  price : number;
  starRating : number;
  imageUrl : string;

  constructor(private _productService : ProductService) { }

  ngOnInit() {
  }

  addProduct() : void {
    console.log(this.productId);
    console.log(this.productName);
    console.log(this.productCode);
    console.log(this.releaseDate);
    console.log(this.description);
    console.log(this.price);
    console.log(this.starRating);
    console.log(this.imageUrl);

    let product : IProduct = {
      productId: this.productId,
      productName: this.productName,
      productCode : this.productCode,
      releaseDate: this.releaseDate,
      description: this.description,
      price: this.price,
      starRating:this.starRating,
      imageUrl: this.imageUrl,
    };
    
    this._productService.addProduct(product);
  }
}
