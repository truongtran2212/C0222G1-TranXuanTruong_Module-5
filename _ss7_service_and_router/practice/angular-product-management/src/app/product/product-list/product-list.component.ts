import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../module/product";
import {Category} from "../../module/Category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  categoryList: Category[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllCategory();
    this.getAllproduct()
  }

  getAllproduct() {
    this.productService.getAllProduct().subscribe(value => {
      this.productList = value
    })
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
    })
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(value => {

    }, error => {

    }, () => {
      this.ngOnInit();
    })
    console.log(id)
  }
}
