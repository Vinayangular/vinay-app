import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path:"home", component:HomeComponent},
{path:"mens", component:MensComponent},
{path:"womens", component:WomensComponent},
{path:"kids", component:KidsComponent},
{path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
