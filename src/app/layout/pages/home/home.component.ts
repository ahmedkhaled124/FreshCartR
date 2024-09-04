import { product } from './../../../shared/interfaces/product';
import { error } from 'console';
import { ProductService } from './../../../shared/services/product/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productlist!:product[];
  constructor(private _ProductService:ProductService){}
  ngOnInit(): void {
    if( typeof localStorage!= 'undefined')
   localStorage.setItem('currentpage','/home')
  this.getallperoducts();
  }

  getallperoducts(){
    this._ProductService.getallproducts().subscribe({
      next : res =>{
        this.productlist - res.data;
        console.log(this.productlist)
      },
      error : err =>{
        console.log(err);
      }
    })

  }
}
