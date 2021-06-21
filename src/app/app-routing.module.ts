import { RedeComponent } from './views/rede/rede.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { GostosComponent } from './views/gostos/gostos.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "gostos",
  component: GostosComponent
},
{
  path: "rede",
  component: RedeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
