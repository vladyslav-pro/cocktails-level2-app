import {Component, inject, input} from '@angular/core';
import {CocktailModel} from '../../../shared/cocktail.model';
import {ReplacePipe} from '../../../shared/replace.pipe';
import {TitleCasePipe} from '@angular/common';
import {Router} from '@angular/router';
import {CocktailService} from '../../../shared/cocktail.service';

@Component({
  selector: 'app-cocktail-item',
  standalone: true,
  imports: [
    ReplacePipe,
    TitleCasePipe,
  ],
  templateUrl: './cocktail-item.component.html',
  styleUrl: './cocktail-item.component.scss'
})
export class CocktailItemComponent {
  private router = inject(Router);
  private cocktailService = inject(CocktailService);
  cocktail = input.required<CocktailModel>();

  changeFavoriteState(id: string) {
    this.cocktailService.changeFavoriteState(id);
  }

  selectedCocktail(cocktailId: string) {
    this.cocktailService.selectCocktail(cocktailId);
    this.router.navigate([`/cocktails/`, cocktailId]);
  }

}
