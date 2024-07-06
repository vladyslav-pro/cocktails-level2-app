import {Routes} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {CocktailsComponent} from './main-page/cocktails.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  }, {
    path: 'cocktails',
    component: CocktailsComponent,
    // loadChildren: () => import('./main-page/main-page.routes').then(m => m.cocktailsRoutes)
  }

];
