import { Component, input } from '@angular/core';
import { CocktailModel } from '../../shared/cocktail.model';
import { ReplacePipe } from '../../shared/replace.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-cocktail-item',
  standalone: true,
  imports: [
    ReplacePipe,
    TitleCasePipe
  ],
  templateUrl: './cocktail-item.component.html',
  styleUrl: './cocktail-item.component.scss'
})
export class CocktailItemComponent {
  cocktail = input.required<CocktailModel>();

  onSelectFavorite(id: string) {
    console.log('Favorite clicked', id);
  }
}
