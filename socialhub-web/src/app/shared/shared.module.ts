import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TabMenuModule,
    SkeletonModule,
  ]
})
export class SharedModule { }
