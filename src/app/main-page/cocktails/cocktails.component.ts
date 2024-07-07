import {Component, inject} from '@angular/core';
import {TitleCasePipe} from '@angular/common';
import {CocktailService} from '../../shared/cocktail.service';
import {FormsModule} from '@angular/forms';
import {CocktailItemComponent} from './cocktail-item/cocktail-item.component';
import {SearchPipe} from '../../shared/search.pipe';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,
    CocktailItemComponent,
    SearchPipe,
    RouterOutlet
  ],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent {
  private cocktailService = inject(CocktailService);

  userName: string = '';
  cocktailName: string = '';

  cocktails = this.cocktailService.cocktailsList;
}
