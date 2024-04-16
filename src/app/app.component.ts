import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AppService} from "./app.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'router-example';

  public sApp: AppService = inject(AppService);
  private router: Router = inject(Router);

  public toggleLogin() {
    this.sApp.loginState.next(!this.sApp.loginState.getValue())
    if (this.sApp.loginState.getValue()) {
      return this.router.navigate(['dashboard']);
    } else {
      return this.router.navigate(['login']);
    }
  }
}
