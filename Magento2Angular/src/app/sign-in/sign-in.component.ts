import { Component, OnInit } from '@angular/core';
import{SignInService} from '../sign-in.service'
import { HttpClientModule,HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email:string;
  public password:string;
  public errorMsg:string;
  public loggedinUserName:string
  public users:SignIn[];
  public loggedInUser:SignIn;
  public http:HttpClient;
  public signInService:SignInService

  constructor(s:SignInService,http:HttpClient) { 
this.http = http;
this.signInService =s;
this.getUsers();



  }
  public getUsers():SignIn[]{

    this.http.get<SignIn[]>("http://localhost:3000/users").subscribe((res:SignIn[])=>{

      this.users = res;
      console.dir(res);
      console.log("Users");
      console.dir(this.users);
    });

return this.users;

  }
  ngOnInit() {
  }
public loginUser(){
  console.log("LoginsUsers");
  console.dir(this.users);
  this.loggedInUser  = this.users.filter(s=>s.email==this.email && s.password==this.password)[0];
  this.signInService.userName = this.loggedInUser.name;
  //this.signInService.setloggedInUserName(this.loggedInUser.name);
  this.signInService.getloggedInUserName(this.loggedInUser.name);
}

public validateEmail(){
if(this.email==""){

this.errorMsg += "Please Enter Valid Email</br>";


}

}

public validatePassword(){

  if(this.password==""){

    this.errorMsg += "Please Enter Valid Password</br>";
    
    
    }
    
}

}

export class SignIn{
  id:number;
  name:string;
  email:string;
  password:string;
  gender:string;
  mobile:number;
  address:string;
  }