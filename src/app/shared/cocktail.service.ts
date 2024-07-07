import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {CocktailModel} from "./cocktail.model";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private http = inject(HttpClient);
  private cocktails = signal<CocktailModel[]>([]);
  private cocktailsData = signal<CocktailModel[]>([]);

  cocktailsList = this.cocktailsData.asReadonly();

  constructor() { }

  getCocktails() {
    return this.http.get<CocktailModel[]>('/cocktails').pipe(
      map( (data: CocktailModel[]) => {
        this.cocktailsData.set(data);
      })
    );
  }


  changeFavoriteState(id: string) {

  }

}
