import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:Menu[];
  http:HttpClient;
  constructor(h:HttpClient) { 
    this.http = h;
  }

  ngOnInit() {
    this.getMenu();

  }

  private getMenu(){

    this.http.get<Menu[]>("http://localhost:3000/Menu").subscribe((res:Menu[])=>{

      this.menu = res;
      console.dir(res);
      console.log("Menu");
      console.dir(this.menu);
      debugger;
  });
}

}
export class Menu{

id:number;
level:number;
name:string;


}
