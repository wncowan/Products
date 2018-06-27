import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {
  duplicate = false;
  product: any;
  id: any;
  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.product = { name: "", image: "", price: 0}
    this._route.params.subscribe(Params => { 
      this.id = Params['id'];
      this._http.getProduct(this.id).subscribe(data => {
        if(data['message']=="success"){
          this.product = data['result'];
        }
      });
    });
  }

  onSubmit() {
    this.duplicate=false;
    this._http.putProduct(this.id,this.product).subscribe(data=>{
      if(data['result']['code'] == 11000) {
        this.duplicate = true;
      } else {
        this._router.navigate(['/products']);
      }
    });
  }

}