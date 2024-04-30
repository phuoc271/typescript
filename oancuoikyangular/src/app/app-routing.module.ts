import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductLoaiComponent } from './product-loai/product-loai.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'list', component: ProductListComponent, title: 'Product List' },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Product details',
  },
  {
    path: 'product-loai/:loai',
    component: ProductLoaiComponent,
    title: 'Product loai',
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
