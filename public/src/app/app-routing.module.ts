import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { NoneComponent } from './none/none.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: ProductsNewComponent },
  { path: 'products/:id', component: EditProductComponent },
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: '**', component: NoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }