import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CurrencyTypeComponent } from './currency-type/currency-type.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import{FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TopBarComponent,
    CurrencyTypeComponent,
    CreateUserComponent,
    WelcomeMsgComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
