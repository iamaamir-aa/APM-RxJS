import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Subject, Subscription, combineLatest } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListAltComponent implements  OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';

  products: Product[] = [];

  constructor(private productService: ProductService) { }
  products$=this.productService.productWithCategory$;



  // selectedProd$=combineLatest([
  //   this.products$,this.as$
  // ]).pipe(


  // )

selectedProduct$=this.productService.selectedCategory$;




  ngOnDestroy(): void {
  }

  onSelected(productId: number): void {
this.productService.getProductID(productId);
  }
}
