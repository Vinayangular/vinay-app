import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { MensModule } from './mens/mens.module';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path:"home", component:HomeComponent},
//{path:"mens", component:MensComponent},
{path:"mens", loadChildren: ()=> import('./mens/mens.module').then(m => m.MensModule) },
// {path:"womens", component:WomensComponent},
{path:"womens", loadChildren: ()=> import('./womens/womens.module').then(m => m.WomensModule)},
//{path:"kids", component:KidsComponent},
{path:"kids", loadChildren: ()=> import('./kids/kids.module').then(m => m.KidsModule)},
{ path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
