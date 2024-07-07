import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TitleCasePipe} from '@angular/common';
import {LoginService} from '../shared/login.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  imports: [RouterOutlet, TitleCasePipe]
})
export class MainPageComponent implements OnInit {
  private loginService = inject(LoginService);

  userName: string = '';

  ngOnInit() {
    this.userName = this.loginService.getUserName;
  }

}
