import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'list', component: ProductListComponent, data: { title: 'Product list' } },
  { path: 'product-details/:id', component: ProductDetailsComponent, data: { title: 'Product Detail' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
