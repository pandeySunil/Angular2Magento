import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public local:SessionStorageService
  constructor(l:SessionStorageService) {
    this.local = l;
   }
   public productsAdded:CartProduts[]=[];
  public createCart(userId:number,productId:number,productQty:number){
    var cp = new CartProduts();
    cp.productId = productId;
    cp.productQty = productQty;
  this.productsAdded.push(cp)
    if(!(this.local.get(userId.toString()))){
      this.local.set(userId.toString(),this.productsAdded);
    }
    else{
debugger;
      var session =this.local.get(userId.toString())
      //session.set();
    }
  }
}


export class CartProduts{
  public productId:number;
  public productQty:number;
  
  }