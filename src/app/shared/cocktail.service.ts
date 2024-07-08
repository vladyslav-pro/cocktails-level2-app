import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs';
import {CocktailModel} from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private http = inject(HttpClient);
  private cocktails = signal<CocktailModel[]>([]);
  private cocktailsData = signal<CocktailModel[]>([]);
  selectedCocktail = signal<CocktailModel | undefined>(undefined);

  cocktailsList = this.cocktailsData.asReadonly();

  constructor() {
    const data = localStorage.getItem('cocktails');
    if (data) {
      this.cocktailsData.set(JSON.parse(data));
    } else {
      this.getCocktails().pipe(
        take(1)
      ).subscribe();
    }
  }

  getCocktails() {
    return this.http.get<CocktailModel[]>('/cocktails').pipe(
      map( (data: CocktailModel[]) => {
        this.cocktailsData.set(data);
      })
    );
  }


  changeFavoriteState(id: string) {
    this.cocktailsData.update( (cocktails) => {
      const cocktail = cocktails.find( c => c.id === id);
      if (cocktail) {
        cocktail.favorite = !cocktail.favorite;
      }
      return cocktails;
      }
    )
    this.saveCocktails();
  }

  selectCocktail(id: string) {
    this.selectedCocktail.set(this.cocktailsData().find( c => c.id === id));
  }

  private saveCocktails() {
    localStorage.setItem('cocktails', JSON.stringify(this.cocktailsData()));
  }

}
