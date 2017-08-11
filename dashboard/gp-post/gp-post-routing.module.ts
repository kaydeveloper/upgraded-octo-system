import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpPostComponent } from './gp-post.component';
import { GpAddPostComponent } from './gp-add-post/gp-add-post.component';
import { GpEditPostComponent } from './gp-edit-post/gp-edit-post.component';

const routes: Routes = [
  { path: '', component: GpPostComponent },
  { path: 'posts', component: GpPostComponent },
  { path: 'add-post', component: GpAddPostComponent },
  { path: 'post/single/:slug', component: GpEditPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpPostRoutingModule { }
