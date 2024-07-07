import {Routes} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {MainPageComponent} from "./main-page/main-page.component";

export const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  }, {
    path: 'cocktails',
    component: MainPageComponent,
    loadChildren: () => import('./main-page/cocktails.routes').then(m => m.cocktailsRoutes)
  }
];
