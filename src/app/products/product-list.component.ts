import { Component, OnInit, OnDestroy } from '@angular/core';

import { BehaviorSubject, Observable, Subject, Subscription, combineLatest, map } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements  OnDestroy {

  updateProduct(product: Product): void {
    throw new Error('Method not implemented.');
  }

  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];

  actionStream=new BehaviorSubject<number>(0);
  actionStream$=this.actionStream.asObservable();

  products$=combineLatest([
    this.productService.productWithCategory$,
    this.actionStream$
  ]).pipe(
    map(([products,selectedCategoryId])=>
products.filter(product => selectedCategoryId?product.categoryId===selectedCategoryId:true)));

  //sub!: Subscription;

  constructor(private productService: ProductService) { }

  categories$=this.productService.productCategories$;


  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    this.actionStream.next(+categoryId);
  }
}
