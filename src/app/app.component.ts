import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loadedFeature='recipe';

  title = 'secondapp';
ngOnInit(){
  // firebase.initializeApp({
  //   apiKey: "AIzaSyBlWXf7CGqqcbeIUyDH-DN_g3-V4zV_Vmk",
  //   authDomain: "ng-recipe-book-a5181.firebaseapp.com"
  // });
}

  onNavigate(feature:string){
    this.loadedFeature=feature;

  }
}
