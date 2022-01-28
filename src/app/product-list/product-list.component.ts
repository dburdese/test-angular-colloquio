import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { Product, products } from '../products';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  searchText: string = "";
  products = products;
  userLoged: boolean = true;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _sharedService: SharedService
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      this._sharedService.userLogoutEvent.subscribe((param: boolean) => {
        this.userLoged = param;
      })
    })
  }

  goToProductDetails(elementSelected: Product) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: elementSelected.id
      }
    };
    this._router.navigate(['/product-details'], navigationExtras);
  }
}
