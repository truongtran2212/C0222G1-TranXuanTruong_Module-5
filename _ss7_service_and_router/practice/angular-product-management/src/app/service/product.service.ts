import {Injectable} from '@angular/core';
import {Product} from "../module/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../module/Category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  API_P = 'http://localhost:3000/productList'

  API_C = 'http://localhost:3000/categoryList'

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_P);
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_C);
  }

  saveProduct(product): Observable<void> {
  return this.http.post<void>(this.API_P, product);

  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_P + '/' + id)
  }

  updateProduct(product: Product): Observable<void> {
     return  this.http.patch<void>(this.API_P + '/' + product.id, product)
  }

  delete(id: number): Observable<void>{
      return this.http.delete<void>(this.API_P + '/' + id)
  }
}
