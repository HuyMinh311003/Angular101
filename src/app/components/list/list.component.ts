import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  constructor(private productService: ProductService) { }

  products: any = [];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  buyProduct(product: any) {
    this.productService.handleBuyOnce(product);
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  buyAllProduct(product: any) {
    this.productService.buyAll(product);
    this.products = this.productService.getProducts();
  }
}
