import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Product } from '../products';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {
  @Input() productList: any;
  @Input() filterText: any;
  
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changeOnParent:any) {
    console.log("test filterInput:", changeOnParent.filterText.currentValue);
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
