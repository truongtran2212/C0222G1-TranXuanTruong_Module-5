import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../module/Category";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;

  categoryList: Category[]

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      cost: new FormControl(''),
      category: new FormControl(''),
    });

    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
    })
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(value => {
      this.productForm.reset()

    }, error => {

    }, () => {
      this.router.navigateByUrl('/toast/create-successful');
    })
  }
}
