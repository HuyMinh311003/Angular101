import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, quantity: 3 },
    { id: 3, name: 'Product 3', price: 200, quantity: 5 },
    { id: 4, name: 'Product 4', price: 60, quantity: 2 },
  ]

  //Get Product
  getAllProducts() {
    return this.products;
  }

  getProduct(id: number | string) {
    if (typeof id === 'string') {
      id = parseInt(id);
    }

    const product = this.products.find((product) => product.id === id);
    return product || {};
  }

  //Delete Product
  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  //Buy Product
  buyProduct(product: any) {
    console.log(product);
    product.quantity--;
    if (product.quantity < 0)
      product.quantity = 0;
  }

  buyAllProducts(product: any) {
    console.log(product.name, "total", product.quantity * product.price)
    product.quantity = 0;
  }
}
