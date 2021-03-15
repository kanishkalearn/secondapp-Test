import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loadedFeature='recipe';

  title = 'secondapp';
  onNavigate(feature:string){
    this.loadedFeature=feature;

  }
}