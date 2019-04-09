import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {
  user:string;
  
  constructor() { 
    this.user ="Sunil Pandey"
  }

  ngOnInit() {
  }

}
