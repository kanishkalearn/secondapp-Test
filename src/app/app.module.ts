import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipesModule } from './recipes.module';
import { ShoppingListModule } from './shoppin-list/shopping-list.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingListModule,
    FormsModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
