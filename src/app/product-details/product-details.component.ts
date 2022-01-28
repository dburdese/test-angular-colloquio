import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, products } from '../products';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productsArray = products;
  productSelected: any;
  userLoged: boolean = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this._sharedService.userLogoutEvent.subscribe((param: boolean) => {
        this.userLoged = param;
      })
    })
    this._activatedRoute.queryParams.subscribe(params => {
      this.getProductElement(params['id']);
    })
  }

  getProductElement (idElement:number) {
    for (let item of this.productsArray) {
      if(item.id == idElement) {
        this.productSelected = item;
      }
    }
  }

  backToProductList () {
    this._router.navigate(['/product-list']);
  }
}
