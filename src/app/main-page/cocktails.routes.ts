import {Routes} from "@angular/router";
import {CocktailsComponent} from "./cocktails/cocktails.component";
import {CocktailComponent} from './cocktails/cocktail/cocktail.component';

export const cocktailsRoutes: Routes = [
  {
    path: '',
    component: CocktailsComponent,
  },
  {
    path: ':cocktailId',
    loadComponent: () => import('./cocktails/cocktail/cocktail.component').then(m => m.CocktailComponent),
  }
]
