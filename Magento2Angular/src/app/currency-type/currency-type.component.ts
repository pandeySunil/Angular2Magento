import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-currency-type',
  templateUrl: './currency-type.component.html',
  styleUrls: ['./currency-type.component.css']
})
export class CurrencyTypeComponent implements OnInit {

public currency:currency[];
public selectedCurrancy:string="$";

  constructor(private http:HttpClient) { 
  this.http = http;
  }
 public  selectCurrancy(b:any){
    
//this.selectedCurrancy.symbol = b.symbol;


  }
  ngOnInit() {
    this.getCurrency();
    
    
  }
 public getCurrency():void{

  this.http.get<currency[]>("http://localhost:3000/currency").subscribe((res:currency[])=>{
    res[0].name;
    this.currency = res;
    console.log("Currency");
    console.dir(this.currency);
  });
  
}

    

 

}
export class currency{
  id:number;
  name:string;
  symbol:string;
  }