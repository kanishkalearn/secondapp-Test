import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinListComponent } from './shoppin-list/shoppin-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent}
  ]},
  {path:'shopping-list',component:ShoppinListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 