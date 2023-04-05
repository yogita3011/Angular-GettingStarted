import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConverToSpacesPipe } from 'src/app/pipe/conver-to-spaces.pipe';
import { StarComponent } from 'src/app/shared/star/star.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-details/product-detail.guard';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    StarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
       canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent },
    ])

  ]
})
export class ProductModule { }
