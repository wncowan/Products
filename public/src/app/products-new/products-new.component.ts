import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})

export class ProductsNewComponent implements OnInit {
  duplicate = false;
  product: any;
  constructor(
    private _http: HttpService,
    private _router: Router
  ) {
    this.product = {
      name: "",
      image: "",
      price: 0.01
    }
   }

  ngOnInit() {
  }

  onSubmit(event) {
    console.log("event");
    console.log(event)
    this.duplicate=false;
    this._http.postProduct(this.product).subscribe(data=>{
      if(data['result']['code'] == 11000) {
        this.duplicate = true;
      } else {
        this._router.navigate(['/products']);
      }
    });
  }

}