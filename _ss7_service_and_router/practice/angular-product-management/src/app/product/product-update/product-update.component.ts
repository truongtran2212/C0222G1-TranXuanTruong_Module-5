import { Component, OnInit } from '@angular/core';
import {Product} from "../../module/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  productUpdateForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.product = this.productService.findById(id);

    // dùng setValue để gửi giá trị từ data model sang formGroup
    this.productUpdateForm.setValue(this.product);
    }

  onSubmit() {
    const product = this.productUpdateForm.value;
    this.productService.updateProduct(product);
    this.productUpdateForm.reset();
    this.router.navigateByUrl('');
  }






}
