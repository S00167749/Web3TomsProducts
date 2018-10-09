import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle : string = "Toms's Products";
    imgageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    errorMessage : string;
    
    filterProducts : IProduct[];
    products : IProduct[];
    _listFilter : string;
   
    onNotify(message : string) : void {
        console.log(message);
    }

    ngOnInit() : void {
        console.log('In OnInit');
        //this._productService.addAllProducts();
        this._productService.getProducts().subscribe(products => {
            this.products = products
            this.filterProducts = this.products;
        },
           error => this.errorMessage = <any>error);
       
    }

    constructor(private _productService : ProductService){
        
    }


    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value : string) {
        console.log(value);
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy : string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


  toggleImage() : void {
    this.showImage = !this.showImage;
  }
  
}
