import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
 un:string
  constructor(s:DataService) { 

    s.u ="dsdffdfdgfg";
  }

  ngOnInit() {
  }

}
