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

  cocktailsData = this.cocktails.asReadonly();

  constructor() { }

  getCocktails() {
    return this.http.get<CocktailModel[]>('/cocktails').pipe(
      map( (data: CocktailModel[]) => {
        this.cocktails.set(data);
        // return data
      })
    );
  }

  changeFavoriteState(id: string) {

  }



}
