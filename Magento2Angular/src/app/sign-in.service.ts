import { Injectable, Output, EventEmitter } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class SignInService {
loginStatus:boolean;
userName:string;
@Output() change: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.userName = "";
   }
   public setloggedInUserName(s :string){
    this.userName =s;
   }
   public getloggedInUserName(s:string){
     
    this.userName =s;
    this.change.emit(this.userName);
    console.log("Service.GetLoggedInUser"+s)
    //return this.userName;


   }
}

