import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import { LoadedRouterConfig } from '@angular/router/src/config';
declare var jQuery:any;
declare var $:any;



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
  @Input() label: any;
  
  constructor(http:HttpClient) { 
this.http = http;

  }
  ngOnChanges(){

    alert("");
  }
  public ngForLoaded(a:any){
    debugger;
alert();
    console.dir(a);
  }
  //@ViewChild('label')

  ngAfterViewInit() {

    setTimeout(function(){
      jQuery(document).ready(function() {
   
        jQuery('.carousel[data-type="multi"] .item').each(function(){
        var next = jQuery(this).next();
        if (!next.length) {
        next = jQuery(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo(jQuery(this));
        
        for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        next = jQuery(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        }
        });
        
        });

    },2000);
    
    
   // this.label.changes.subscribe(()=>this.handleEndOfNgfor());

}

  ngOnInit() {
    this.loader =true;
    this.getProducts();
    this.loader =false;
   

    
    
  }
  private handleEndOfNgfor() {
alert('hooray!');
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

export class JQ{

public getJq(){

  
}


}