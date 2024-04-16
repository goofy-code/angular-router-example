import {CanActivateFn} from '@angular/router';
import {AppService} from "./app.service";
import {inject} from "@angular/core";

export const noAuthGuard: CanActivateFn = (route, state) => {
  const sApp = inject(AppService);
  if (sApp.loginState.value) {
    sApp.showMessage('You are already logged in');
    return false;
  }
  return true;
};
