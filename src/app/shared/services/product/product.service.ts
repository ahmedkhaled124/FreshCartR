import { productRes } from './../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _Httpclient:HttpClient) { }
  getallproducts():Observable <productRes>
  {
     return this._Httpclient.get<productRes>('${Enviroment.baseurl}/api/v1/products');
  }
}
