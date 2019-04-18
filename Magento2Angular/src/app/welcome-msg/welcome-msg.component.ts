import { Component, OnInit } from '@angular/core';
import{SignInService} from '../sign-in.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';



@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {
  user:string="";
  v:any;
  isLoggedIn:boolean;
  signInService:SignInService;
  public local: LocalStorageService
  constructor(signInService:SignInService,local: LocalStorageService) { 
    //this.user = signInService.userName;
    this.signInService = signInService;
    this.isLoggedIn=signInService.loginStatus;
    this.local = local;
    this.refreshLoggedInUserName();
  

  }
public refreshLoggedInUserName(){


  this.signInService.change.subscribe(s => {
      
      
    this.user =s;
    
  });
  if(this.local.get("loggedInUser")==null||this.local.get("loggedInUser").name==undefined){
    this.signInService.change.subscribe(s => {
      
      
      this.user =s;
      
    });

  }
  else{
    this.user = this.local.get("loggedInUser").name;
  }
}
  ngOnInit() {

  }

}
