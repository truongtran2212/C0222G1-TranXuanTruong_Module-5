import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../service/product.service";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
