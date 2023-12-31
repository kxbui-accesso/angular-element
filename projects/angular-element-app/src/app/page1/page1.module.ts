import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';
import { LibComponentModule } from 'angular-element-lib';


@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    LibComponentModule,
    Page1RoutingModule
  ],
  // exports: [Page1Component]
})
export class Page1Module { }
