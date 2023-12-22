import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  products: any = [];

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  buyProduct(product: any) {
    this.productService.buyProduct(product);
    this.products = this.productService.getAllProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getAllProducts();
  }

  buyAllProducts(product: any) {
    this.productService.buyAllProducts(product);
    this.products = this.productService.getAllProducts();
  }

  viewDetail(id: string) {
    this.router.navigate(['/product', id]);
  }
}
