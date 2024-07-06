import {Component, inject, OnInit} from '@angular/core';
import {LoginService} from "../shared/login.service";
// import {use} from 'msw/lib/core/utils/internal/requestHandlerUtils';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent implements OnInit {
  private loginService = inject(LoginService);

  userName: string = '';

  ngOnInit() {
    this.userName = this.loginService.getUserName;
  }

  // protected readonly use = use;
}
