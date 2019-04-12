import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import { LoadedRouterConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-most-viewed-products',
  templateUrl: './most-viewed-products.component.html',
  styleUrls: ['./most-viewed-products.component.css']
})
export class MostViewedProductsComponent implements OnInit {

  public loader:boolean
  public productName:string;
  public productPrice:string;
  public products:Products[];
  public http:HttpClient;
  constructor(http:HttpClient) { 
this.http = http;

  }
  ngAfterViewInit() {
    this.loadScript();
}

  ngOnInit() {
    this.loader =true;
    this.getProducts();
    this.loader =false;
    
    
  }
  public loadScript() {
    debugger;
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../Custom-js/most-viewed-proudct.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}

private getProducts(){
  this.http.get<Products[]>("http://localhost:3000/Products").subscribe((res:Products[])=>{

    this.products = res;
    console.dir(res);
    console.log("products");
    console.dir(this.products);
  });

}
}

export  class Products{
  imgUrl:string;
  name:string;
  price:string;

}