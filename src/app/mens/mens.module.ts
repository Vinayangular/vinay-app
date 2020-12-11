import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensRoutingModule } from './mens-routing.module';
import { MensComponent } from './mens.component';


@NgModule({
  declarations: [MensComponent],
  imports: [
    CommonModule,
    MensRoutingModule
  ]
})
export class MensModule { }
