import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  error = false;

  constructor( private _http: HttpService ) { }

  ngOnInit() {
    this.getProducts();
  }

  delete(id){
    this._http.deleteProduct(id).subscribe(data =>{
      if(data['message']=='error'){
        this.error=true;
      } else {
        console.log("Getting products.");
        this.getProducts();
      }
    });
  }

  getProducts(){
    this._http.getProducts().subscribe(data =>{
      if(data['message']=="success"){
        this.products = data['result'];
      } else {
        this.error = true;
      }
    }); 
  }
}