import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category/category.module').then(module => module.CategoryModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
