import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService{
  userLogoutEvent = new EventEmitter<boolean>();
  constructor() { }

  handleLoginLogout(action:boolean) {
    this.userLogoutEvent.emit(action);
  }
}
