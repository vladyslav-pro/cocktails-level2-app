import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userName: string = '';

  setUserName(name: string) {
      this.userName = name;
  }

  get getUserName(): string {
    return this.userName;
  }
}
