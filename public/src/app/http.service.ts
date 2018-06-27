import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  postProduct(product) {
    return this._http.post('/api/products', product);
  }
  getProducts(){
    return this._http.get('/api/products');
  }
  deleteProduct(id){
    return this._http.delete(`/api/products/${id}/delete`)
  }
  putProduct(id,product){
    return this._http.put(`/api/products/${id}`,product);
  }
  getProduct(id){
    return this._http.get(`/api/products/${id}`);
  }
}