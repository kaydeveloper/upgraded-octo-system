import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpProductsRoutingModule } from './gp-products-routing.module';
import { GpProductsComponent } from './gp-products.component';
import { GpAddProductsComponent } from './gp-add-products/gp-add-products.component';
import { GpEditProductsComponent } from './gp-edit-products/gp-edit-products.component';

@NgModule({
  imports: [
    CommonModule,
    GpProductsRoutingModule
  ],
  declarations: [GpProductsComponent, GpAddProductsComponent, GpEditProductsComponent]
})
export class GpProductsModule { }
