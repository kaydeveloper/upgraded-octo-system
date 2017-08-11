import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { GpCategoriesRoutingModule } from './gp-categories-routing.module';
import { GpCategoriesComponent } from './gp-categories.component';
import { GpEditCategoriesComponent } from './gp-edit-categories/gp-edit-categories.component';
import { GpAddCategoriesComponent } from './gp-add-categories/gp-add-categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    GpCategoriesRoutingModule
  ],
  declarations: [GpCategoriesComponent, GpEditCategoriesComponent, GpAddCategoriesComponent]
})
export class GpCategoriesModule { }
