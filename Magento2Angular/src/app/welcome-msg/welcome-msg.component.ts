import { Component, OnInit } from '@angular/core';
import{SignInService} from '../sign-in.service';



@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {
  user:string="";
  isLoggedIn:boolean;
  signInService:SignInService;
  constructor(signInService:SignInService) { 
    //this.user = signInService.userName;
    this.signInService = signInService;
    this.isLoggedIn=signInService.loginStatus;

  }
public refreshLoggedInUserName(){


}
  ngOnInit() {

    this.signInService.change.subscribe(s => {

      this.user = s;
      
    });
  }

}
