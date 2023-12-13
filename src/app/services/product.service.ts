import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    { id: 1, name: 'product 1', price: 100, quantity: 1 },
    { id: 2, name: 'product 2', price: 300, quantity: 3 },
    { id: 3, name: 'product 3', price: 300, quantity: 3 },
    { id: 4, name: 'product 4', price: 300, quantity: 3 },
  ]

  getProducts() {
    return this.products;
  }

  handleBuyOnce(product: any) {
    console.log(product);
    product.quantity--;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  buyAll(product: any) {
    console.log(product.name, "total", product.quantity * product.price)
    product.quantity = 0;
  }
}
