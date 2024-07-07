import {Component, inject, OnInit} from '@angular/core';
import {CocktailService} from '../../../shared/cocktail.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss'
})
export class CocktailComponent implements OnInit {
  private cocktailService = inject(CocktailService);
  private router = inject(Router);

  cocktail = this.cocktailService.selectedCocktail;
  cocktailType: string = '';

  ngOnInit() {
    this.setTypeOfCocktail();
  }
  setTypeOfCocktail() {
    this.cocktailType = this.cocktail()?.isAlcoholic ? 'Alcoholic' : 'Non-alcoholic';
  }

  changeFavoriteState(id: string | undefined) {
    if (id) {
      this.cocktailService.changeFavoriteState(id);
    }
  }

  returnToCocktails() {
    this.router.navigate(['/cocktails'])
  }
}
