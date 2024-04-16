import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AppService} from "./app.service";

export const authGuard: CanActivateFn = (route, state) => {
  const sApp = inject(AppService);
  if (!sApp.loginState.value) {
    sApp.showMessage('You must be logged in to access this page');
    return inject(Router).createUrlTree(['/login']);
  }
  return true;
};
