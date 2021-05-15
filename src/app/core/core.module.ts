import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeService } from '../recipes/recipe.service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { DataStorageService } from '../shared/data-storage.service';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shoppin-list/shopping-list.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],

  providers: [RecipeService, ShoppingListService, DataStorageService,
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},
  ],
})
export class CoreModule {}
