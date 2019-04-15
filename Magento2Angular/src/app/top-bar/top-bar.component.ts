import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  router:Router;
  public navigate(){
this.router.navigate(["signIn"]);

  }
  constructor(s:DataService,r:Router) { 
      this.router = r;

    s.u ="dsdffdfdgfg";
  }

  ngOnInit() {
  }

}
