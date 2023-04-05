import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child/child.component';
import { ParentComponent } from './components/parent/parent/parent.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'parent',
  //   pathMatch: 'full'
  // }, {
  //   path: 'parent',
  //   component: ParentComponent
  // }, {
  //   path: 'child',
  //   component: ChildComponent
  // },
  // {
  //   path: '',
  //   redirectTo: 'productList',
  //   pathMatch: 'full'
  // }, {
  //   path: 'productList',
  //   component: ProductListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
