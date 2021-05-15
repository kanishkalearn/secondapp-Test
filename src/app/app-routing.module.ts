import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './core/home/home.component';
import { ShoppinListComponent } from './shoppin-list/shoppin-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'recipes', loadChildren:'./recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppinListComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',preloadingStrategy:PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
