import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensComponent } from './mens.component';

const routes: Routes = [
  {path:'', component: MensComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensRoutingModule { }
