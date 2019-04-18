import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent implements OnInit {


public productDetail:productDetail;
public http:HttpClient;
public activeRoute:ActivatedRoute;
public productId:string;
  constructor(h:HttpClient,a:ActivatedRoute) { 
    this.http = h;
    this.activeRoute = a;
    this.activeRoute.params.subscribe( params => this.productId =params.id);
    this.getProductDetail();
  }

  ngOnInit() {
    
  }
public getProductDetail(){

  console.log("APIURL"+"http://localhost:3000/productDetails/"+this.productId);
  this.http.get<productDetail>("http://localhost:3000/productDetails/"+this.productId).subscribe((res:productDetail)=>{

      this.productDetail = res;
     // console.dir(res);
      console.log("ProductDetailArray");
      console.dir(this.productDetail);
    });
}
}

export class productDetail{
id:number;
imgUrl;string;
name:string;
price:number;
sku:string;
gty:number;
description:string;



}