import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public loginState = new BehaviorSubject(false);
  public message: string = '';

  constructor() {
  }

  public showMessage(message: string) {
    this.message = message;

    setTimeout(() => {
      this.message = '';
    }, 1000)
  }
}
