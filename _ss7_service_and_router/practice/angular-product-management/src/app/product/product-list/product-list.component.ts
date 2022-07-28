import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../module/product";
import {Category} from "../../module/Category";
import {Toast, ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  categoryList: Category[];

  constructor(private productService: ProductService ,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllCategory();
    this.getAllproduct();
    const toast = this.activatedRoute.snapshot.params.toast;
    if(toast === 'create-successful'){
      this.toastr.success('Add Product successfully!', 'Product!');
    }
  }

  getAllproduct() {
    this.productService.getAllProduct().subscribe(value => {
      this.productList = value;
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
      this.toastr.success('Delete Product successfully!', 'Product!');
      this.getAllproduct();
      // this.ngOnInit();
    })
    console.log(id)
  }
}
