import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes = [
    {
      id: 1,
      name: 'pizza'
    },
    {
      id: 2,
      name: 'hamburgers'
    },
    {
      id: 3,
      name: 'salad'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToRecipeDetail(id: number) {
    console.log(id)
    this.router.navigateByUrl('/recipe-detail/' + id);
  }

}
