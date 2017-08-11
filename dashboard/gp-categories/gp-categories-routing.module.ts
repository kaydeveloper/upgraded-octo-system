import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpCategoriesComponent } from './gp-categories.component';
import { GpEditCategoriesComponent } from './gp-edit-categories/gp-edit-categories.component';
import { GpAddCategoriesComponent } from './gp-add-categories/gp-add-categories.component';

const routes: Routes = [
  { path: '', component: GpCategoriesComponent },
  { path: 'categories', component: GpCategoriesComponent },
  { path: 'edit-categories/:id', component: GpEditCategoriesComponent },
  { path: 'add-categories', component: GpAddCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpCategoriesRoutingModule { }
