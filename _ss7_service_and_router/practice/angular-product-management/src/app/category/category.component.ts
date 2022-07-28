import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Category} from "../module/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
    })
  }
}
