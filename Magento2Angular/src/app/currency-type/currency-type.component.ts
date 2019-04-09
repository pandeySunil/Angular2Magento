import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-currency-type',
  templateUrl: './currency-type.component.html',
  styleUrls: ['./currency-type.component.css']
})
export class CurrencyTypeComponent implements OnInit {

public currency:currency[];
  constructor(private http:HttpClient) { 
  this.http = http;
  }

  ngOnInit() {
    this.getCurrency();
    console.dir(this.currency);
  }
 public getCurrency():void{

  this.http.get<currency[]>("http://localhost:3000/currency").subscribe((res:currency[])=>{
    res[0].name;
    console.dir(res);
  });

}

    

 

}
export class currency{
  id:number;
  name:string;
  symbol:string;
  }