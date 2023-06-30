import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibComponentComponent } from './lib-component.component';



@NgModule({
  declarations: [
    LibComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LibComponentComponent]
})
export class LibComponentModule { }
