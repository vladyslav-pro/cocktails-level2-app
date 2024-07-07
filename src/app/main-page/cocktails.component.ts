import {Component, DestroyRef, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginService} from "../shared/login.service";
import {TitleCasePipe} from "@angular/common";
import {CocktailModel} from "../shared/cocktail.model";
import {CocktailService} from "../shared/cocktail.service";
import {FormsModule} from "@angular/forms";
import {CocktailItemComponent} from "./cocktail-item/cocktail-item.component";

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    CocktailItemComponent
  ],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent implements OnInit {
  private loginService = inject(LoginService);
  private cocktailService = inject(CocktailService);
  private destroyRed = inject(DestroyRef);

  userName: string = '';
  cocktailName: string = '';

  cocktails = this.cocktailService.cocktailsData

  ngOnInit() {
    this.userName = this.loginService.getUserName;
    const getCocktailsSub$ = this.cocktailService.getCocktails().subscribe();
    this.destroyRed.onDestroy(() => {
      getCocktailsSub$.unsubscribe();
    })
  }

  filteredCocktails() {
    console.log(this.cocktailName);
  }

}
