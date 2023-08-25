import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../product-categories/product-category';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(private http:HttpClient) { }

  productCategoriesUrl='api/productCategories';

productCategories$=this.http.get<ProductCategory[]>(this.productCategoriesUrl).pipe(
  shareReplay(1)
);


}
