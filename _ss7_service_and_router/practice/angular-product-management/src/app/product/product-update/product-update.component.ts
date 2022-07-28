import { Component, OnInit } from '@angular/core';
import {Product} from "../../module/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../module/Category";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  productUpdateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    cost: new FormControl(''),
    category: new FormControl(''),
  });
categoryList: Category[]

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
    })

    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(id).subscribe(value => {
      this.product = value;
      this.productUpdateForm.patchValue(this.product);
    });

    // dùng setValue để gửi giá trị từ data model sang formGroup
    }

  onSubmit() {
    const product = this.productUpdateForm.value;
    this.productService.updateProduct(product).subscribe(
      value => {},

    );
    this.router.navigateByUrl('/');
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
