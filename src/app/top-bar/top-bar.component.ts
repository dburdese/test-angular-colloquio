import { Component } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent { 
  userLoged: boolean = true;
  constructor(
    private _sharedService: SharedService,
  ){

  }

  logout() {
    this._sharedService.handleLoginLogout(false);
    this.userLoged = false;
  }
  login () {
    this._sharedService.handleLoginLogout(true);
    this.userLoged = true;
  }
}
