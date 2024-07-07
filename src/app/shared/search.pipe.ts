import { Pipe, PipeTransform } from '@angular/core';
import { CocktailModel } from './cocktail.model';
@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(cocktails: CocktailModel[], cocktailName: string): CocktailModel[] {
    if (cocktailName === '') {
      return cocktails;
    }

    return cocktails.filter(cocktail => {
      return cocktail.name.toLowerCase().includes(cocktailName.toLowerCase());
    });

  }

}
