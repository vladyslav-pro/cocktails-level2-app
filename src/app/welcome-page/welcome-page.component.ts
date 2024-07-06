import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../shared/login.service";
import {MatAnchor, MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatAnchor,
    RouterLink,
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  private loginService = inject(LoginService);
  private router = inject(Router);
  loginForm = new FormGroup({
    'name' : new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  onSubmit() {
    const userName = this.loginForm.value.name;
    if (typeof userName === 'string') {
      this.loginService.setUserName(userName)
      this.router.navigate(['cocktails']);
    }
    this.loginForm.reset();
  }

}
