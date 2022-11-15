import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsListComponent }, { path: 'products/:id', component: ProductDetailsComponent }]), ProductsListComponentModule, ProductsServiceModule, ProductDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
