import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GpPostRoutingModule } from './gp-post-routing.module';
import { GpPostComponent } from './gp-post.component';
import { GpAddPostComponent } from './gp-add-post/gp-add-post.component';
import { GpEditPostComponent } from './gp-edit-post/gp-edit-post.component';
import { GpTinymceComponent } from '../../gp-shared/gp-tinymce.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GpPostRoutingModule
  ],
  declarations: [GpPostComponent, GpAddPostComponent, GpEditPostComponent, GpTinymceComponent]
})
export class GpPostModule { }
