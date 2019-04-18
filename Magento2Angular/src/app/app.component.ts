import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Magento2Angular';
  router:Router;
  KEY = 'value';
    value: any = null;
 
    set(expired: number = 0) {
        this.local.set(this.KEY, { a: 1, now: +new Date }, expired, 's');
    }
  constructor(router:Router,public local: LocalStorageService, public session: SessionStorageService){
      this.router = router
   this.router.navigate(["home"]);
   this.set();
   this.get();
  }

  get() {
    this.value = this.local.get(this.KEY);
    console.log("SessionValue Here");
    console.dir(this.value);
}
}
