import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CurrencyTypeComponent } from './currency-type/currency-type.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { MostViewedProductsComponent } from './most-viewed-products/most-viewed-products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { ProductDeatilComponent } from './product-deatil/product-deatil.component'
import { AngularWebStorageModule } from 'angular-web-storage';
import { LogoComponent } from './logo/logo.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TopBarComponent,
    CurrencyTypeComponent,
    CreateUserComponent,
    WelcomeMsgComponent,
    SignInComponent,
    MostViewedProductsComponent,
    HomePageComponent,
    MenuComponent,
    CartComponent,
    SearchComponent,
    ProductDeatilComponent,
    LogoComponent
    
    
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'signIn', component: SignInComponent },
      { path: 'p', component: MostViewedProductsComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'productdetail/:id', component:ProductDeatilComponent}])

      
   
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
