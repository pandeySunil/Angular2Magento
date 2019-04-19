import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import{CartserviceService} from '../cartservice.service'
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent implements OnInit {


    public productDetail:productDetail;
    public http:HttpClient;
    public productQty:number=0;
    public activeRoute:ActivatedRoute;
    public productId:string;
    public cartservice:CartserviceService
    public local:SessionStorageService;
  constructor(h:HttpClient,a:ActivatedRoute,c:CartserviceService,s:SessionStorageService) { 
    this.http = h;
    this.activeRoute = a;
    this.cartservice = c;
    this.local = s;
    this.activeRoute.params.subscribe( params => this.productId =params.id);
    
    this.getProductDetail();
  }

  ngOnInit() {
    
  }
  public AddToCart(){
    debugger;
    this.cartservice.createCart(1,this.productDetail.id,this.productQty);
  
  }
  public IncreaseProductQty(){

    this.productQty = this.productQty+1;
  }
  public DecreaseProductQty(){
if(!this.productQty)
    this.productQty = this.productQty-1;
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