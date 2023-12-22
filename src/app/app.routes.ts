import { Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
